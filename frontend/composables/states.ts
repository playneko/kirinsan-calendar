type States = {
  thisDate: Ref<String | null>;
  getDetailDates: Ref<Array<object> | []>;
  setThisDate: (value: String | null) => void;
  setDetailDates: (value: Array<object> | []) => void;
};

export const useStates = (): States => {
  const thisDate = useState<String | null>("thisDate", () => null);
  const getDetailDates = useState<Array<object> | []>("getDetailDates", () => []);

  const setThisDate = (value: String | null) => {
    thisDate.value = value;
  };
  const setDetailDates = (value: Array<object> | []) => {
    getDetailDates.value = value;
  };

  return {
    thisDate,
    getDetailDates,
    setThisDate,
    setDetailDates
  };
};
