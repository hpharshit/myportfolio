import { Button,Typography } from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletePlatform, getUser } from "../../actions/user";
import "./PlatformCard.css";
const PlatformCard = ({
  url = "img-URL",
  title = "Title",
  image,
  isAdmin=false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deletePlatform(id));
    dispatch(getUser());
  };

  return (
    <div className="platformCard">
      <a href={url} target="blank">
        <img src={image} alt="image" />
        <Typography textAlign="center">{title}</Typography>
      </a>
      {isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
          onClick={() => deleteHandler(id)}
        >
          <FaTrash />
        </Button>
      )}
    </div>
  );
};

export default PlatformCard;
