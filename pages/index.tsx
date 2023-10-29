import Image from "next/image";
import { Inter } from "next/font/google";
import { RootState } from "@/redux/store/store";
import { decrement, increment } from "@/redux/slice/counter/counter";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const hanldeClick = () => {
    // fetch("api/user/register", {
    //   method: "POST",
    //   "content-type": "application/json",
    //   body: JSON.stringify({
    //     name: "Saaaajid",
    //     email: "abc",
    //     password: "hello",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
    axios.post("api/user/register", {
      name: "Sajid",
      email: "sajid@gmail.com",
      password: "1234",
    });
  };
  return (
    <main>
      {" "}
      <div>
        <button aria-label="Increment value" onClick={hanldeClick}>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </main>
  );
}
