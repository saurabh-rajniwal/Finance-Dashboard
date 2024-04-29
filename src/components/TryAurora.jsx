import auroraImg from "../assets/AuroraImg.png";
import Button from "./Button";

function TryAurora() {
  return (
    <div className="flex w-full pt-9 gap-10">
      <div className="flex flex-col gap-10 pl-9 ">
        <p className="text-custom-aurora-heading font-bold text-4xl">
          Try Aurora Plus now!
        </p>
        <p className="text-custom-light-grey">
          Enter in this creative world. Aurora Plus is the best product for your
          business.
        </p>
        <div className="flex gap-4">
          <Button variation="primary">Try for free</Button>
          <Button variation="ghost">skip</Button>
        </div>
      </div>
      <div className="w-full h-full">
        <img src={auroraImg} alt="Aurora Products" />
      </div>
    </div>
  );
}

export default TryAurora;
