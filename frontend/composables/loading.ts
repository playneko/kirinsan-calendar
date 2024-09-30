type Loading = {
  isLoading: Ref<boolean | false>;
  setLoading: (newLoading: boolean | false) => void;
};

export const useLoading = (): Loading => {
  const isLoading = useState<boolean | false>("isLoading", () => false);

  const setLoading = (newLoading: boolean | false) => {
    isLoading.value = newLoading;
  };

  return {
    isLoading,
    setLoading
  };
};
