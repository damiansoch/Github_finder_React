import SpinnerSVG from '../layout/assets/my-loader.svg';

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={SpinnerSVG}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
