import "./SendLove.css";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { toast } from "react-toastify";
import { UrgeWithPleasureComponent } from "../TimerCoutdown.tsx";
import { Modal } from "antd";
import { useRealtimeDB } from "../../utils/firebase.utils.ts";
import { useDeviceContext } from "../../providers/DeviceProvider.tsx";
import { NotiWarning } from "../Warning.tsx";
import ReactPlayer from "react-player";

const explosionProps = {
  force: 0.8,
  duration: 3000,
  particleCount: 450,
  width: 3000,
};

const celebList = [
  "Gavin Casalegno.webp",
  "Gavin Casalegno Diễn viên.jpg",
  "hieu-thu-hai.jpg",
  "Hyun Bin.jpg",
  "isaac.jpg",
  "Joseph Gordon.jpg",
  "Justin Bieber.webp",
  "Lee Min Ho.jpg",
  "Lê Minh.png",
  "Lưu Đức Hoa.jpg",
  "MCK.webp",
  "Mono(1).PNG",
  "MTP.webp",
  "noo-phuoc-thinh.jpg",
  "Shawn Mendes.webp",
  "soobin-hoang-son.jpg",
  "Timothée Chalamet.webp",
  "V - BTS.webp",
];

const man = [
  {
    image: "/avatar/Nhân.jpg",
    name: "Nguyễn Anh Nhân",
  },
  {
    image: "/avatar/LXNgoc.JPG",
    name: "Lê Xuân Ngọc",
    vid: "/vid_love/Lê Xuân Ngọc.MOV",
  },
  {
    image: "/avatar/tien.jpg",
    name: "Nguyễn Duy Tiến",
  },
  {
    image: "/avatar/ngoc.jpg",
    name: "Phạm Đức Ngọc",
  },
  {
    image: "/avatar/CA.PNG",
    name: "Cao Thế Anh",
    vid: "/vid_love/Cao Thế Anh.MOV",
  },
  {
    image: "/avatar/quyet.JPG",
    name: "Nguyễn Văn Quyết",
  },
  {
    image: "/avatar/Dũng.jpg",
    name: "Hoàng Ngọc Dũng",
  },
  {
    image: "/avatar/hieu.JPG",
    name: "Phan Anh Hiếu",
  },
  {
    image: "/avatar/mduc.jpg",
    name: "Nguyễn Minh Đức",
  },
  {
    image: "/avatar/phuoc.JPG",
    name: "Hồ Hữu Phước",
  },
  {
    image: "/avatar/manhtuan.jpg",
    name: "Nguyễn Mạnh Tuấn",
  },
  {
    image: "/avatar/tam.JPG",
    name: "Nguyễn Hữu Tâm",
  },
  {
    image: "/avatar/tin.JPG",
    name: "Nguyễn Phú Tín",
  },
  {
    image: "/avatar/tuananh.jpg",
    name: "Nguyễn Tuấn Anh",
  },
  {
    image: "/avatar/quaan hoang.JPG",
    name: "Quân Hoàng",
  },
  {
    image: "/avatar/duc-be.jpg",
    name: "Nguyễn Văn Đức",
  },
];

export default function SendLove() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isCurrentSelected, setIsCurrentSelected] = useState(false);
  const { deviceId, userName } = useDeviceContext();

  return (
    <div className={"sl-wrapper"}>
      <h1>Trao gửi yêu thương</h1>
      <p>Bạn muốn nhận lời chúc từ ai nhỉ?</p>
      <p>Hãy “ấn” vào người mà bạn muốn nhận lời chúc nhé</p>
      <div className={"sl-user-boxes"}>
        {man.map((item, index) => {
          return (
            <div
              onClick={() => {
                if (deviceId.length === 0) {
                  NotiWarning();
                  return;
                } else if (userName.length === 0) {
                  toast("Hãy đặt tên cho mình trước nhé", { type: "error" });
                  setTimeout(() => {
                    document.scrollingElement?.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }, 500);
                  return;
                }
                setIsCurrentSelected(true);
                setTimeout(() => {
                  setIsCurrentSelected(false);
                  setSelectedUser(item);
                }, 600);
              }}
              className={"sl-user-box"}
            >
              <UserBox
                isCurrentSelected={isCurrentSelected}
                index={index}
                key={index}
                name={item.name}
                age={2}
                image={item.image}
              />
            </div>
          );
        })}
      </div>

      {selectedUser && deviceId.length !== 0 && (
        <VidLuvModal
          vid={selectedUser?.vid}
          open={!!selectedUser}
          onClose={() => setSelectedUser(null)}
          name={selectedUser.name}
        />
      )}
    </div>
  );
}

const UserBox = ({ image, index, isCurrentSelected, rating }: any) => {
  const [isSelected, setIsSelected] = useState(false);
  const { deviceId, userName } = useDeviceContext();
  return (
    <>
      {isSelected ? (
        <img
          className={"animate__animated animate__rubberBand animate__wobble"}
          src={image}
          alt=""
        />
      ) : (
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (deviceId.length === 0) {
              return;
            } else if (userName.length === 0) {
              return;
            } else if (isCurrentSelected) {
              return;
            }
            setIsSelected(true);
          }}
          src={"/celeb/" + celebList[index]}
          alt=""
        />
      )}
    </>
  );
};

const icon = [
  {
    src: "rate/it-thoi.png",
    alt: "it-thoi",
  },
  {
    src: "rate/kkk.png",
    alt: "kkk",
  },
  {
    src: "rate/i-like-it.png",
    alt: "i-like-it",
  },
  {
    src: "rate/ngon.png",
    alt: "ngon",
  },
  {
    src: "rate/ong-trum.png",
    alt: "ong-trum",
  },
];

interface VidLuvModalProps {
  open?: boolean;
  onClose: () => void;
  vid: string;
  name: string;
  ratingValue?: RatingProps;
}

const VidLuvModal = ({ open, onClose, vid, name }: VidLuvModalProps) => {
  const [pick, setItem] = useState<number>(-1);
  const { rateVideo } = useRealtimeDB();
  const { userName, deviceId } = useDeviceContext();
  const handleRate = (item: number) => {
    let value = item === pick ? -1 : item;
    setItem(value);
    rateVideo(deviceId, "test", value, userName);
    setTimeout(() => {
      setEmoji(!emoji);
    }, 600);
  };
  const [emoji, setEmoji] = useState<boolean>(false);
  const [rating, setRating] = useState<RatingProps>();
  const { getRating } = useRealtimeDB();
  let index = 0;
  const fetchRating = async () => {
    const res = await getRating(deviceId, "test");
    if (res) {
      index++;
      setRating(res);
      setItem(res.userRating.id === deviceId ? res.userRating.rating : -1);
      console.log(index, res);
    }
  };
  useEffect(() => {
    fetchRating();
    const interval = setInterval(() => {
      fetchRating();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Modal
      centered
      title={`Lơi chúc từ ${name} iu dấu 🩷`}
      open={open}
      onCancel={onClose}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: "#00000030",
            borderStyle: "solid",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <ReactPlayer
            width={"100%"}
            playing
            url={vid || "/vid_love/file_example_MP4_480_1_5MG.mp4"}
            controls
          />
        </div>
        {emoji ? (
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            {icon.map(({ alt, src }, index) => {
              return (
                <button
                  onClick={() => handleRate(index)}
                  key={index}
                  className="rating"
                  style={{
                    outline: "none",
                    border: "none",
                    background: "none",
                  }}
                >
                  {pick === index ? (
                    <img
                      alt={alt}
                      src={src}
                      style={{
                        width: "50px",
                        height: "50px",
                        scale: "1.2",
                        translate: "0px -14px",
                      }}
                    />
                  ) : (
                    <img
                      alt={alt}
                      src={src}
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <button
            onClick={() => setEmoji(!emoji)}
            style={{
              display: "flex",
              width: "100%",
              borderWidth: 0,
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 16px",
            }}
          >
            <p
              style={{
                margin: 0,
                padding: 0,
                fontSize: 24,
                fontWeight: "bold",
                marginRight: 16,
              }}
            >
              {rating?.total}
            </p>
            {!(rating && rating.total > 1) ? (
              <div
                style={{
                  display: "flex",
                  backgroundColor: "gray",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: 50,
                    background: "blue",
                  }}
                ></div>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: 50,
                    background: "red",
                    translate: "-25px 0px",
                  }}
                ></div>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: 50,
                    background: "red",
                  }}
                ></div>
              </div>
            )}
          </button>
        )}
      </div>
    </Modal>
  );
};
