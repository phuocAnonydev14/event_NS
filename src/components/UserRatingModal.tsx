import { Modal } from "antd";
import { useRealtimeDB } from "../utils/firebase.utils";
import { useEffect, useState } from "react";
import { useDeviceContext } from "../providers/DeviceProvider";
import { convertStringToStar, getRateImageName } from "../utils/string.utils";

interface Props {
  videoId: string;
  onClose: () => void;
  open: boolean;
}

export const UserRatingModal = ({ videoId, onClose, open }: Props) => {
  const { getRating, getAllRating } = useRealtimeDB();
  const { deviceId } = useDeviceContext();
  const [rating, setRating] = useState<userRating[]>();
  useEffect(() => {
    getAllRating(videoId).then((res) => {
      setRating(Object.values(res));
    });
  }, []);

  useEffect(() => {
    if (rating) {
      RatingModal();
    }
  }, [rating]);

  const RatingModal = () => {
    Modal.warning({
      title: "Danh sách react của các lady",
      content: (
        <div
          style={{
            overflowY: "auto",
            maxHeight: "400px",
          }}
        >
          <div>
            {rating?.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid #e8e8e8",
                    alignItems: "center",
                  }}
                >
                  <p>{item.username}</p>
                  <img
                    src={getRateImageName({ number: item.rating })}
                    alt={getRateImageName({ number: item.rating })}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: 8,
                      backgroundColor: "white",
                      borderRadius: "100%",
                      borderWidth: 0.5,
                      borderColor: "#00000030",
                      borderStyle: "solid",
                      padding: "4px",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ),
      onOk: onClose,
      open,
    });
  };

  return <div></div>;
};
