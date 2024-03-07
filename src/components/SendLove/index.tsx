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
import {
  convertStringToStar,
  getRateImageName,
} from "../../utils/string.utils.ts";
import { UserRatingModal } from "../UserRatingModal.tsx";

const explosionProps = {
  force: 0.8,
  duration: 3000,
  particleCount: 450,
  width: 3000,
};

const celebList = [
  "Đàm Vĩnh Hưng.webp",
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
    image: "/avatar/CA.jpg",
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
    vid: "/vid_love/Nguyễn Tuấn Anh.mov",
  },
  {
    image: "/avatar/quaan hoang.JPG",
    name: "Quân Hoàng",
  },
  {
    image: "/avatar/duc-be.jpg",
    name: "Nguyễn Văn Đức",
    vid: "/vid_love/Nguyễn Văn Đức.mp4",
  },
];

export default function SendLove() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isCurrentSelected, setIsCurrentSelected] = useState(false);
  const [ratingM, setRatingM] = useState<boolean>(false);
  const { deviceId, userName } = useDeviceContext();
  console.log('====================================');
  console.log(ratingM);
  console.log('====================================');

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
          setRatingModal={() => setRatingM(true)}
        />
      )}
      {selectedUser && ratingM && (
        <UserRatingModal
          videoId={"test"}
          onClose={() => setRatingM(false)}
          open={!!ratingM}
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
  setRatingModal: () => void;
}
const VidLuvModal = ({
  open,
  onClose,
  vid,
  name,
  setRatingModal,
}: VidLuvModalProps) => {
  const [pick, setItem] = useState<number>(-1);
  const { rateVideo } = useRealtimeDB();
  const { userName, deviceId } = useDeviceContext();
  const [emoji, setEmoji] = useState<boolean>(false);
  const [rating, setRating] = useState<RatingProps>();
  const { getRating } = useRealtimeDB();
  const [userRating, setUserRating] = useState<rate[]>([]);
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
  useEffect(() => {
    handleEmoji();
  }, [rating]);
  const handleRate = (item: number) => {
    let value = item === pick ? -1 : item;
    setItem(value);
    rateVideo(deviceId, "test", value, userName);
    setTimeout(() => {
      setEmoji(!emoji);
    }, 600);
  };
  const handleEmoji = () => {
    if (!rating) return;
    setUserRating(convertStringToStar(rating.count));
  };
  return (
    <Modal
      centered
      title={`Lơi chúc từ ${name} iu dấu 🩷`}
      open={open}
      onCancel={onClose}
      onOk={onClose}
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
              padding: "0px 12px",
              backgroundColor: "white",
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
            {rating && (
              <div
                style={{
                  display: "flex",
                }}
              >
                {userRating.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={getRateImageName({ name: item })}
                      alt={getRateImageName({ name: item })}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: 8,
                        translate: `-${index * 25}px 0px`,
                        backgroundColor: "white",
                        borderRadius: "100%",
                        borderWidth: 0.5,
                        borderColor: "#00000030",
                        borderStyle: "solid",
                        padding: "4px",
                      }}
                    />
                  );
                })}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setRatingModal();
                  }}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: 8,
                    translate: `-${userRating.length * 25}px 0px`,
                    backgroundColor: "white",
                    borderRadius: "100%",
                    borderWidth: 0.5,
                    borderColor: "#00000030",
                    borderStyle: "solid",
                    padding: "4px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "100%",
                      backgroundColor: "black",
                    }}
                  />
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "100%",
                      backgroundColor: "black",
                    }}
                  />
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "100%",
                      backgroundColor: "black",
                    }}
                  />
                </button>
              </div>
            )}
          </button>
        )}
      </div>
    </Modal>
  );
};
