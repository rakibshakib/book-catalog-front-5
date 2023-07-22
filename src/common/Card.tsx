type cardTypeProps = {
  title: string;
  details: string;
  images: string;
  actionTitle: string;
  action: () => void;
};
const Card = ({
  title,
  details,
  images,
  action,
  actionTitle,
}: Partial<cardTypeProps>) => {
  return (
    <div className="border shadow-md rounded-md">
      <div className="p-3 text-[14px]">
        <div className="flex justify-start">
          <div className="w-[150px] h-[200px]">
            <img
              className="w-full h-full"
              src={images}
              alt={`images of ${title || ""}`}
            />
          </div>
          <div className="w-full ml-5">
            <h5 className="font-bold">{title}</h5>
            <p className="py-3 text-[12px]">{details}</p>
            <p>
              {action && (
                <button
                  className="text-[12px] border px-3 rounded-md py-1 text-white bg-gray-600 w-full"
                  onClick={action}
                >
                  {actionTitle || "Action"}
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
