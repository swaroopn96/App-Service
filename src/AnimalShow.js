import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

//here bird is assigned to bird svg and if we have not assigned by default assigned to same name like cat to cat
const svgMap = {
  bird: bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};

export default function AnimalShow({ type }) {
  return (
    <div>
      <img src={svgMap[type]} alt="animal" />
    </div>
  );
}
