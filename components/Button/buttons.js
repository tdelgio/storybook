export const ButtonPrimary = ({ size, children }) => {
  return (
    <button
      className={` bg-red-400 font-bold text-white px-6 py-2 rounded-lg ${size} `}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary = ({ size, children }) => {
  return (
    <buttons
      className={` bg-green-400 font-bold text-white px-6 py-2 rounded-lg ${size} `}
    >
      {children}
    </buttons>
  );
};

export const ButtonRounded = ({ size, children }) => {
  return (
    <button
      className={` inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${size} `}
    >
      {children}
    </button>
  );
};
