type Verify = {
  isVerify: Ref<boolean | false>;
  setVerify: (newVerify: boolean | false) => void;
};

export const useVerify = (): Verify => {
  const isVerify = useState<boolean | false>("isVerify", () => false);

  const setVerify = (newVerify: boolean | false) => {
    isVerify.value = newVerify;
  };

  return {
    isVerify,
    setVerify
  };
};
