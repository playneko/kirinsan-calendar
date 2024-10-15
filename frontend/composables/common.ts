import dayjs from 'dayjs'
// const nuxtApp: any = useNuxtApp();
const imageList: Array<object> = [
  {
    key: '001',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-001.png?alt=media&token=5b9d7e4b-3db0-421f-b8ce-4530e831a4e6'
  },
  {
    key: '002',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-002.png?alt=media&token=67d72d5b-6974-47b3-88f5-7f720d4709d6'
  },
  {
    key: '003',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-003.png?alt=media&token=5926e61b-df2c-44db-aee3-d6e58dc6ff8f'
  },
  {
    key: '004',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-004.png?alt=media&token=8c2ead1d-6dba-40fa-bf30-a80017ab9e95'
  },
  {
    key: '005',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-005.png?alt=media&token=4ace6a19-2219-4147-9aa7-71b6b3e42b4d'
  },
  {
    key: '006',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-006.png?alt=media&token=f2475ff5-9758-42b7-bd1f-502972c6afc3'
  },
  {
    key: '007',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-007.png?alt=media&token=f13e55bf-fc59-429b-9a82-e96f1d91e853'
  },
  {
    key: '008',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-008.png?alt=media&token=12274e8b-3eb3-47c6-b075-77e59aa67f5f'
  },
  {
    key: '009',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-009.png?alt=media&token=53b19c2f-935e-4193-852f-0776f4149dee'
  },
  {
    key: '010',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-010.png?alt=media&token=a862752f-1721-4a44-a9c3-bb3aca1fed46'
  },
  {
    key: '011',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-011.png?alt=media&token=f9c58a00-f38c-421f-a67e-d7767380e45e'
  },
  {
    key: '012',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-012.png?alt=media&token=49b1ef17-65ba-40c4-9097-fa89681b4183'
  },
  {
    key: '013',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-013.png?alt=media&token=d2058216-2735-441f-af75-ad65b7a8d9af'
  },
  {
    key: '014',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-014.png?alt=media&token=b1374041-4d72-4dc8-b199-4d4e7de01c07'
  },
  {
    key: '015',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-015.png?alt=media&token=2415e635-2064-45d3-abd6-ad4f1d773581'
  },
  {
    key: '016',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-016.png?alt=media&token=75a1a116-e6d4-47bc-8496-62dc1276b94a'
  },
  {
    key: '017',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-017.png?alt=media&token=1d302672-fc79-4840-81aa-6dd7a42dedff'
  },
  {
    key: '018',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-018.png?alt=media&token=94e5c2a5-049c-4dcc-b355-b96a9f3f6cdb'
  },
  {
    key: '019',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-019.png?alt=media&token=468b4b2c-9a09-4d73-884c-046f2364a2f0'
  },
  {
    key: '020',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-020.png?alt=media&token=67061328-3e22-4c88-a018-ce9f6e4b6559'
  },
  {
    key: '021',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-021.png?alt=media&token=5b5036f1-5f56-4292-9080-8b2f3b7ac7e0'
  },
  {
    key: '022',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-022.png?alt=media&token=9ca5b58c-e87a-43be-b2e1-2ce54098d535'
  },
  {
    key: '023',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-023.png?alt=media&token=719ec8fe-ec5e-4d4f-9f1d-6f64e306ac8e'
  },
  {
    key: '024',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-024.png?alt=media&token=8f969c71-89e8-487b-87a2-7d520588a68d'
  },
  {
    key: '025',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-025.png?alt=media&token=9e8ed924-03cc-491d-aab9-de48300a237d'
  },
  {
    key: '026',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-026.png?alt=media&token=fa12fb82-4037-471e-a712-92ead731293c'
  },
  {
    key: '027',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-027.png?alt=media&token=0c900072-0124-406d-8217-0c18ecf6ca58'
  },
  {
    key: '028',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-028.png?alt=media&token=6b53bdac-b338-49b2-b9ba-511c72696b28'
  },
  {
    key: '029',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-029.png?alt=media&token=060afbcc-c85a-4915-8ded-20e9b0da0812'
  },
  {
    key: '030',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-030.png?alt=media&token=d7e17761-687a-4335-8be3-08434cee5873'
  },
  {
    key: '031',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-031.png?alt=media&token=5bbabbdf-08e8-4610-9839-661f73a6b19a'
  },
  {
    key: '032',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-032.png?alt=media&token=4566712b-a84b-42d3-b990-a6204091cf80'
  },
  {
    key: '033',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-033.png?alt=media&token=8067be0f-16d3-4d0f-91e9-40da11cde8ce'
  },
  {
    key: '034',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-034.png?alt=media&token=8821f162-52be-4ee9-9696-23cbe0e267b4'
  },
  {
    key: '035',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-035.png?alt=media&token=56cdee1e-0bf6-4c70-9f78-7026bb39585a'
  },
  {
    key: '036',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-036.png?alt=media&token=f993b13c-b1c6-4c2b-aeca-8541b6333492'
  },
  {
    key: '037',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-037.png?alt=media&token=96a8b24c-d898-474d-b79a-59c84aa5b286'
  },
  {
    key: '038',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-038.png?alt=media&token=487803d6-b3e7-4ccb-bda2-c072b93c7337'
  },
  {
    key: '039',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-039.png?alt=media&token=d3db5e72-c2bc-4ac8-aa93-c0b87cface28'
  },
  {
    key: '040',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-040.png?alt=media&token=477700f3-6678-4011-b383-6520655cb783'
  },
  {
    key: '041',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-041.png?alt=media&token=aa194666-d7d9-49ed-91c6-d1034b22a8f1'
  },
  {
    key: '042',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-042.png?alt=media&token=9bfaab9b-c98f-471b-aa29-8bfbe041d546'
  },
  {
    key: '043',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-043.png?alt=media&token=1a0d6621-4469-43f5-a5be-4133a00e1cb0'
  },
  {
    key: '044',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-044.png?alt=media&token=9084594b-52a7-4540-ac11-fd539c205d97'
  },
  {
    key: '045',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-045.png?alt=media&token=b76e67f1-3779-4ced-821d-324a3d76f7c3'
  },
  {
    key: '046',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-046.png?alt=media&token=85df9f24-79b8-4fdd-b24d-3cec87ba07d8'
  },
  {
    key: '047',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-047.png?alt=media&token=52f6c023-3078-4bb7-bb20-8be5d91fb5e4'
  },
  {
    key: '048',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-048.gif?alt=media&token=d929bc1f-abca-476a-863c-22adba15291a'
  },
  {
    key: '049',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-049.gif?alt=media&token=b7b0080e-d00e-42c0-8dad-c92b718f2c19'
  },
  {
    key: '050',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-050.gif?alt=media&token=7f9d6991-cdf9-4e15-b715-bccc4d420781'
  },
  {
    key: '051',
    value: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-051.gif?alt=media&token=307e48d6-7d66-491b-9fcb-c18cb96d3002'
  }
];

const isEmpty = (value: string | any[] | null | undefined) => {
  if (value === null || value === undefined || value.length === 0 || value === '' || value === 'NULL' || value === 'undefined') {
    return true
  }
  return false
}

// 日付変換処理(YYYY-MM-DD)
const dateRaplace = (str: any) => {
  const result = str.replace(/[^0-9]/g, ' ').split(' ');
  let resultDay: string = "";
  for (var i = 0; i < result.length; i++) {
    if (!isEmpty(result[i])) {
      if (!isEmpty(resultDay)) {
        resultDay += "-";
      }
      resultDay += result[i];
    }
  }
  return dayjs(resultDay).format('YYYY-MM-DD');
}

// 日付変換処理(YYYY年MM月DD日)
const dateRaplace2 = (str: any) => {
  return dayjs(str).format('YYYY年MM月DD日');
}

// イメージチェック
const getImage = (str: any) => {
  if (!isEmpty(str)) {
    const filterData = imageList.filter((image: any) => {
      return image.key === str ? image.value : '';
    });
    if (!isEmpty(filterData)) {
      const getData: any = filterData[0];
      return getData.value;
    }
  }
}

// 付き合う日抽出
const withOfDate = async (value: any) => {
  if (!isEmpty(value)) {
    const filterDate: any = value.filter((calendar: any) => {
      return calendar.type === 1;
    });
    if (!isEmpty(filterDate)) {
      const getDate: any = filterDate[0];
      if (!isEmpty(getDate)) {
        const getYear: String = getDate.year;
        const getMonth: String = getDate.month;
        const getDay: String = getDate.day;
        return dayjs(getYear + "-" + getMonth + "-" + getDay).format('YYYY年MM月DD日');
      } else {
        return "";
      }
    }
  }
}

// カレンダー計算
const calendarOfDate = async (value: any) => {
  let markedDates: Array<any> = new Array();

  if (!isEmpty(value)) {
    const today: Date = new Date();
    let fullYear: number = today.getFullYear();
    let withOfDate: any = dayjs(new Date()).format('YYYY-MM-DD');
    let selectDate: Object;

    // 現在の日付
    selectDate = { key: 'today', content: 'purple', dates: new Date() };
    markedDates.push(selectDate);

    // 付き合う日抽出
    const type1Date: any = value.filter((calendar: any) => {
      return calendar.type === 1;
    });
    if (!isEmpty(type1Date)) {
      const getDate: any = type1Date[0];
      if (!isEmpty(getDate)) {
        const getYear: String = getDate.year;
        const getMonth: String = getDate.month;
        const getDay: String = getDate.day;
        withOfDate = dayjs(getYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

        if (!isEmpty(withOfDate)) {
          selectDate = { highlight: { color: 'green', fillMode: 'outline' }, dates: [ withOfDate ] };
          // markedDates = Object.assign({}, markedDates, selectDate);
          markedDates.push(selectDate);
        }

        // 1周年、2周年、3周年...計算
        for (let i = 1; i < 11; i++) {
          const fullYear: String = String(Number(getDate.year) + i);
          const fullDate: any = dayjs(fullYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

          if (!isEmpty(fullDate)) {
            selectDate = { highlight: { color: 'orange', fillMode: 'outline' }, dates: [ fullDate ] };
            // markedDates = Object.assign({}, markedDates, selectDate);
            markedDates.push(selectDate);
          }
        }

        // 100日、200日、300日...計算
        for (let i = 1; i < 11; i++) {
          const fullDate: any = dayjs(getYear + "-" + getMonth + "-" + getDay);
          const plusDate: any = fullDate.add(i * 100, 'day').format('YYYY-MM-DD');

          if (!isEmpty(plusDate)) {
            selectDate = { highlight: { color: 'pink', fillMode: 'outline' }, dates: [ plusDate ] };
            // markedDates = Object.assign({}, markedDates, selectDate);
            markedDates.push(selectDate);
          }
        }
      }
    }

    // 誕生日
    const type2Date: any = value.filter((calendar: any) => {
      return calendar.type === 2;
    });
    if (!isEmpty(type2Date)) {
      for (let i = 0; i < 4; i++) {
        type2Date.map((getDate: any) => {
          if (!isEmpty(getDate)) {
            const getYear: String = isEmpty(getDate.year) ? fullYear : getDate.year;
            const getMonth: String = getDate.month;
            const getDay: String = getDate.day;
            const getColor: String = isEmpty(getDate.color) ? 'blue' : getDate.color;
            const fullDate: any = dayjs(getYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

            if (!isEmpty(fullDate)) {
              // selectDate = {[fullDate]: {selected: true, marked: true, selectedColor: 'blue'}};
              selectDate = { highlight: { color: getColor, fillMode: 'outline' }, dates: [ fullDate ] };
              // markedDates = Object.assign({}, markedDates, selectDate);
              markedDates.push(selectDate);
            }
          }
        });
        fullYear++;
      }
    }

    // 記念日/休暇/その他かつ、繰り返しなし
    const type3Date: any = value.filter((calendar: any) => {
      return calendar.type > 2 && calendar.repeat === 0;
    });
    if (!isEmpty(type3Date)) {
      type3Date.map((getDate: any) => {
        const getYear: String = getDate.year;
        const getMonth: String = getDate.month;
        const getDay: String = getDate.day;
        const getColor: String = getDate.color;
        const fullDate = dayjs(getYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

        if (!isEmpty(fullDate)) {
          selectDate = { highlight: { color: getColor, fillMode: 'outline' }, dates: [ fullDate ] };
          markedDates.push(selectDate);
        }
      });
    }

    // 記念日/休暇/その他かつ、繰り返しあり
    const type4Date: any = value.filter((calendar: any) => {
      return calendar.type > 2 && calendar.repeat === 1;
    });
    if (!isEmpty(type4Date)) {
      fullYear = today.getFullYear();
      for (let i = 0; i < 4; i++) {
        type4Date.map((getDate: any) => {
          const getYear: String = fullYear.toString();
          const getMonth: String = getDate.month;
          const getDay: String = getDate.day;
          const getColor: String = isEmpty(getDate.color) ? 'blue' : getDate.color;
          const fullDate: any = dayjs(getYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

          if (!isEmpty(fullDate)) {
            selectDate = { highlight: { color: getColor, fillMode: 'outline' }, dates: [ fullDate ] };
            markedDates.push(selectDate);
          }
        });
        fullYear++;
      }
    }
  }

  return markedDates;
}

// カレンダー詳細
const calendarOfDetail = (value: any, value2: any) => {
  let markedDates: Array<any> = new Array();

  if (!isEmpty(value) && !isEmpty(value2)) {
    const today: Date = new Date();
    let fullYear: number = today.getFullYear();
    let withOfDate: any = dayjs(new Date()).format('YYYY-MM-DD');
    let selectDate: Object;
    let index: number = 0;

    // 現在の日付
    selectDate = { type: 'subheader', titleDate: dayjs(value2).format('YYYY年MM月DD日') };
    markedDates.push(selectDate);

    // 付き合う日抽出
    const type1Date: any = value.filter((calendar: any) => {
      return calendar.type === 1;
    });
    if (!isEmpty(type1Date)) {
      const getDate: any = type1Date[0];
      if (!isEmpty(getDate)) {
        const getYear: String = getDate.year;
        const getMonth: String = getDate.month;
        const getDay: String = getDate.day;
        withOfDate = dayjs(getYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

        if (!isEmpty(withOfDate) && !isEmpty(value2) && withOfDate === value2) {
          // selectDate = { type: 'divider', inset: true };
          // markedDates.push(selectDate);
          selectDate = {
            no: getDate.no,
            index: index++,
            date: withOfDate,
            type: 1,
            title: '付き合った日',
            subtitle: '',
            prependAvatar: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-001.png?alt=media&token=5b9d7e4b-3db0-421f-b8ce-4530e831a4e6',
            isModify: false
          };
          markedDates.push(selectDate);
        }

        // 1周年、2周年、3周年...計算
        for (let i = 1; i < 11; i++) {
          const fullYear: String = String(Number(getDate.year) + i);
          const fullDate: any = dayjs(fullYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

          if (!isEmpty(fullDate) && !isEmpty(value2) && fullDate === value2) {
            // selectDate = { type: 'divider', inset: true };
            // markedDates.push(selectDate);
            selectDate = {
              no: getDate.no,
              index: index++,
              date: fullDate,
              type: 90,
              title: '付き合って' + i + '年目です。',
              subtitle: '',
              prependAvatar: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-002.png?alt=media&token=67d72d5b-6974-47b3-88f5-7f720d4709d6',
              isModify: false
            };
            markedDates.push(selectDate);
          }
        }

        // 100日、200日、300日...計算
        for (let i = 1; i < 11; i++) {
          const fullDate: any = dayjs(getYear + "-" + getMonth + "-" + getDay);
          const plusDate: any = fullDate.add(i * 100, 'day').format('YYYY-MM-DD');

          if (!isEmpty(plusDate) && !isEmpty(value2) && plusDate === value2) {
            // selectDate = { type: 'divider', inset: true };
            // markedDates.push(selectDate);
            selectDate = {
              no: getDate.no,
              index: index++,
              date: plusDate,
              type: 91,
              title: '付き合って' + (i * 100) + '日目です。',
              subtitle: '',
              prependAvatar: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-003.png?alt=media&token=5926e61b-df2c-44db-aee3-d6e58dc6ff8f',
              isModify: false
            };
            markedDates.push(selectDate);
          }
        }
      }
    }

    // 誕生日
    const type2Date: any = value.filter((calendar: any) => {
      return calendar.type === 2;
    });
    if (!isEmpty(type2Date)) {
      for (let i = 0; i < 4; i++) {
        type2Date.map((getDate: any) => {
          if (!isEmpty(getDate)) {
            const getYear: String = isEmpty(getDate.year) ? fullYear : getDate.year;
            const getMonth: String = getDate.month;
            const getDay: String = getDate.day;
            const fullDate: any = dayjs(getYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

            if (!isEmpty(fullDate) && !isEmpty(value2) && fullDate === value2) {
              // selectDate = { type: 'divider', inset: true };
              // markedDates.push(selectDate);
              selectDate = {
                no: getDate.no,
                image: getDate.image,
                color: getDate.color,
                repeat: getDate.repeat,
                content: getDate.content,
                index: index++,
                date: fullDate,
                type: 2,
                title: getDate.title,
                subtitle: '',
                prependAvatar: isEmpty(getDate.image) ? 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-004.png?alt=media&token=8c2ead1d-6dba-40fa-bf30-a80017ab9e95' : getImage(getDate.image),
                isModify: true
              };
              markedDates.push(selectDate);
            }
          }
        });
        fullYear++;
      }
    }

    // 記念日/休暇/その他かつ、繰り返しなし
    const type3Date: any = value.filter((calendar: any) => {
      return calendar.type > 2 && calendar.repeat === 0;
    });
    if (!isEmpty(type3Date)) {
      type3Date.map((getDate: any) => {
        const getYear: String = getDate.year;
        const getMonth: String = getDate.month;
        const getDay: String = getDate.day;
        const fullDate = dayjs(getYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

        if (!isEmpty(fullDate) && !isEmpty(value2) && fullDate === value2) {
          // selectDate = { type: 'divider', inset: true };
          // markedDates.push(selectDate);
          selectDate = {
            no: getDate.no,
            image: getDate.image,
            color: getDate.color,
            repeat: getDate.repeat,
            content: getDate.content,
            index: index++,
            date: fullDate,
            type: getDate.type,
            title: getDate.title,
            subtitle: '',
            prependAvatar: isEmpty(getDate.image) ? '' : getImage(getDate.image),
            isModify: true
          };
          markedDates.push(selectDate);
        }
      });
    }

    // 記念日/休暇/その他かつ、繰り返しあり
    const type4Date: any = value.filter((calendar: any) => {
      return calendar.type > 2 && calendar.repeat === 1;
    });
    if (!isEmpty(type4Date)) {
      fullYear = today.getFullYear();
      for (let i = 0; i < 4; i++) {
        type4Date.map((getDate: any) => {
          const getYear: String = fullYear.toString();
          const getMonth: String = getDate.month;
          const getDay: String = getDate.day;
          const fullDate: any = dayjs(getYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

          if (!isEmpty(fullDate) && !isEmpty(value2) && fullDate === value2) {
            // selectDate = { type: 'divider', inset: true };
            // markedDates.push(selectDate);
            selectDate = {
              no: getDate.no,
              image: getDate.image,
              color: getDate.color,
              repeat: getDate.repeat,
              content: getDate.content,
              index: index++,
              date: fullDate,
              type: getDate.type,
              title: getDate.title,
              subtitle: '',
              prependAvatar: isEmpty(getDate.image) ? '' : getImage(getDate.image),
              isModify: true
            };
            markedDates.push(selectDate);
          }
        });
        fullYear++;
      }
    }
  }

  return markedDates;
}

// イベントタイプ
const getType = (value: any) => {
  if (value === '誕生日') { return 2; }
  else if (value === '記念日') { return 3; }
  else if (value === '休暇') { return 4; }
  else if (value === 'その他') { return 5; }
  else { return 0; }
}

// イベントタイプ
const getTypeReverse = (value: any) => {
  if (value === 2) { return '誕生日'; }
  else if (value === 3) { return '記念日'; }
  else if (value === 4) { return '休暇'; }
  else if (value === 5) { return 'その他'; }
  else { return 'その他'; }
}

// 年月日を分離
const getDateSplit = (value: any) => {
  return value.split('-');
}

export {
  isEmpty,
  dateRaplace,
  dateRaplace2,
  getImage,
  withOfDate,
  calendarOfDate,
  calendarOfDetail,
  getType,
  getTypeReverse,
  getDateSplit,
  imageList
};