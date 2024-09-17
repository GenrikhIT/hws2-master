import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        width: "147px",
        height: "4px",
        background: "white",
        "& .MuiSlider-thumb": {
          backgroundColor: "white", // Цвет ручки (thumb)
          width: "18px", // Размер ручки
          height: "18px",
          border: "1px solid #01CB22",
          "&::before": {
            content: '""',
            width: "6px", // Размер точки
            height: "6px",
            backgroundColor: "#01CB22", // Цвет точки
            borderRadius: "50%", // Круглая форма точки
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Центровка точки в ручке
          },
        },
      }}
      disableSwap
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
