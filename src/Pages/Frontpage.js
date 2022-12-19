import { useState } from "react";

export const Frontpage = () => {
  const [date, setDate] = useState("");
  const cwismas = new Date("24 Dec, 2022 00:00:00").getTime();

  const cunter = setInterval(() => {
    const today = new Date().getTime();
    const between = cwismas - today;
    const days = Math.floor(between / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((between % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((between % (1000 * 60)) / 1000);

    setDate(`${days}:${hours}:${minutes}:${seconds}`);
  }, 1000);
  return (
    <section>
      <h1>{date}</h1>
    </section>
  );
};
