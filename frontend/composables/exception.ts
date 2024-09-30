type Exception = {
  exception: Ref<String | null>;
  setException: (newException: String | null) => void;
};

export const useException = (): Exception => {
  const exception = useState<String | null>("exception", () => null);

  const setException = (newException: String | null) => {
    exception.value = newException;
  };

  return {
    exception,
    setException
  };
};
