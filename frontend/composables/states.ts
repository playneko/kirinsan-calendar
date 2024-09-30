type States = {
  getDetailDates: Ref<Array<object> | []>;
  setDetailDates: (value: Array<object> | []) => void;
};

export const useStates = (): States => {
  const getDetailDates = useState<Array<object> | []>("getDetailDates", () => []);

  const setDetailDates = (value: Array<object> | []) => {
    getDetailDates.value = value;
  };

  return {
    getDetailDates,
    setDetailDates
  };
};
