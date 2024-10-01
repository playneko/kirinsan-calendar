import dayjs from 'dayjs'
// const nuxtApp: any = useNuxtApp();

const isEmpty = (value: string | any[] | null | undefined) => {
  if (value === null || value === undefined || value.length === 0 || value === '' || value === 'NULL' || value === 'undefined') {
    return true
  }
  return false
}

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

    // お父さん・お母さんの誕生日
    const type2Date: any = value.filter((calendar: any) => {
      return calendar.type === 2;
    });
    if (!isEmpty(type2Date)) {
      for (let i = 0; i < 3; i++) {
        type2Date.map((getDate: any) => {
          if (!isEmpty(getDate)) {
            const getMonth: String = getDate.month;
            const getDay: String = getDate.day;
            const fullDate: any = dayjs(fullYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

            if (!isEmpty(fullDate)) {
              // selectDate = {[fullDate]: {selected: true, marked: true, selectedColor: 'blue'}};
              selectDate = { highlight: { color: 'blue', fillMode: 'outline' }, dates: [ fullDate ] };
              // markedDates = Object.assign({}, markedDates, selectDate);
              markedDates.push(selectDate);
            }
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

    // 現在の日付
    selectDate = { type: 'subheader', title: dayjs(value2).format('YYYY年MM月DD日') };
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
          selectDate = { type: 'divider', inset: true };
          markedDates.push(selectDate);
          selectDate = {
            date: withOfDate,
            type: 1,
            title: '付き合った日',
            subtitle: '',
            prependAvatar: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-001.png?alt=media&token=5b9d7e4b-3db0-421f-b8ce-4530e831a4e6'
          };
          markedDates.push(selectDate);
        }

        // 1周年、2周年、3周年...計算
        for (let i = 1; i < 11; i++) {
          const fullYear: String = String(Number(getDate.year) + i);
          const fullDate: any = dayjs(fullYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

          if (!isEmpty(fullDate) && !isEmpty(value2) && fullDate === value2) {
            selectDate = { type: 'divider', inset: true };
            markedDates.push(selectDate);
            selectDate = {
              date: fullDate,
              type: 2,
              title: '付き合って' + i + '年目です。',
              subtitle: '',
              prependAvatar: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-002.png?alt=media&token=67d72d5b-6974-47b3-88f5-7f720d4709d6'
            };
            markedDates.push(selectDate);
          }
        }

        // 100日、200日、300日...計算
        for (let i = 1; i < 11; i++) {
          const fullDate: any = dayjs(getYear + "-" + getMonth + "-" + getDay);
          const plusDate: any = fullDate.add(i * 100, 'day').format('YYYY-MM-DD');

          if (!isEmpty(plusDate) && !isEmpty(value2) && plusDate === value2) {
            selectDate = { type: 'divider', inset: true };
            markedDates.push(selectDate);
            selectDate = {
              date: plusDate,
              type: 3,
              title: '付き合って' + (i * 100) + '日目です。',
              subtitle: '',
              prependAvatar: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-003.png?alt=media&token=5926e61b-df2c-44db-aee3-d6e58dc6ff8f'
            };
            markedDates.push(selectDate);
          }
        }
      }
    }

    // お父さん・お母さんの誕生日
    const type2Date: any = value.filter((calendar: any) => {
      return calendar.type === 2;
    });
    if (!isEmpty(type2Date)) {
      for (let i = 0; i < 3; i++) {
        type2Date.map((getDate: any) => {
          if (!isEmpty(getDate)) {
            const getMonth: String = getDate.month;
            const getDay: String = getDate.day;
            const fullDate: any = dayjs(fullYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

            if (!isEmpty(fullDate) && !isEmpty(value2) && fullDate === value2) {
              selectDate = { type: 'divider', inset: true };
              markedDates.push(selectDate);
              selectDate = {
                date: fullDate,
                type: 4,
                title: getDate.title,
                subtitle: '',
                prependAvatar: 'https://firebasestorage.googleapis.com/v0/b/cocoatalk-41442.appspot.com/o/avata%2Fn-004.png?alt=media&token=8c2ead1d-6dba-40fa-bf30-a80017ab9e95'
              };
              markedDates.push(selectDate);
            }
          }
        });
        fullYear++;
      }
    }
  }

  return markedDates;
}

export {
  isEmpty,
  dateRaplace,
  withOfDate,
  calendarOfDate,
  calendarOfDetail
};