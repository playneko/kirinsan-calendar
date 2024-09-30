type Datas = {
  datas: Ref<any | null>;
  setDatas: (newDatas: any | null) => void;
};

export const useDatas = (): Datas => {
  const datas = useState<any | null>("datas", () => null);

  const setDatas = (newDatas: any | null) => {
    datas.value = newDatas;
  };

  return {
    datas,
    setDatas
  };
};
