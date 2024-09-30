import dayjs from 'dayjs'
// const nuxtApp: any = useNuxtApp();

const isEmpty = (value: string | any[] | null | undefined) => {
  if (value === null || value === undefined || value.length === 0 || value === '' || value === 'NULL' || value === 'undefined') {
    return true
  }
  return false
}

// 付き合う日抽出
const withOfDate = (value: any) => {
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
const calendarOfDate = (value: any) => {
  let markedDates: Array<any> = new Array();

  if (!isEmpty(value)) {
    const today: Date = new Date();
    let fullYear: number = today.getFullYear();
    let withOfDate: any = dayjs(new Date()).format('YYYY-MM-DD');
    let selectDate: Object;

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
          selectDate = { highlight: 'green', dates: [ withOfDate ] };
          // markedDates = Object.assign({}, markedDates, selectDate);
          markedDates.push(selectDate);
        }

        // 1周年、2周年、3周年...計算
        for (let i = 1; i < 11; i++) {
          const fullYear: String = String(Number(getDate.year) + i);
          const fullDate: any = dayjs(fullYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

          if (!isEmpty(fullDate)) {
            selectDate = { highlight: 'orange', dates: [ fullDate ] };
            // markedDates = Object.assign({}, markedDates, selectDate);
            markedDates.push(selectDate);
          }
        }

        // 100日、200日、300日...計算
        for (let i = 1; i < 11; i++) {
          const fullDate: any = dayjs(getYear + "-" + getMonth + "-" + getDay);
          const plusDate: any = fullDate.add(i * 100, 'day').format('YYYY-MM-DD');

          if (!isEmpty(plusDate)) {
            selectDate = { highlight: 'pink', dates: [ plusDate ] };
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
              selectDate = { highlight: 'blue', dates: [ fullDate ] };
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

  if (!isEmpty(value)) {
    const today: Date = new Date();
    let fullYear: number = today.getFullYear();
    let withOfDate: any = dayjs(new Date()).format('YYYY-MM-DD');
    let markedDate: Object;

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

        if (!isEmpty(withOfDate) && !isEmpty(value2) && withOfDate === value2.dateString) {
          markedDate = {
            'date': withOfDate,
            'type': 1,
            'detail': '付き合う日'
          }
          markedDates.push(markedDate);
        }

        // 1周年、2周年、3周年...計算
        for (let i = 1; i < 11; i++) {
          const fullYear: String = String(Number(getDate.year) + i);
          const fullDate: any = dayjs(fullYear + "-" + getMonth + "-" + getDay).format('YYYY-MM-DD');

          if (!isEmpty(fullDate) && !isEmpty(value2) && fullDate === value2.dateString) {
            markedDate = {
              'date': fullDate,
              'type': 2,
              'detail': '付き合って' + i + '年目です。'
            }
            markedDates.push(markedDate);
          }
        }

        // 100日、200日、300日...計算
        for (let i = 1; i < 11; i++) {
          const fullDate: any = dayjs(getYear + "-" + getMonth + "-" + getDay);
          const plusDate: any = fullDate.add(i * 100, 'day').format('YYYY-MM-DD');

          if (!isEmpty(plusDate) && !isEmpty(value2) && plusDate === value2.dateString) {
            markedDate = {
              'date': plusDate,
              'type': 3,
              'detail': '付き合って' + (i * 100) + '日目です。'
            }
            markedDates.push(markedDate);
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

            if (!isEmpty(fullDate) && !isEmpty(value2) && fullDate === value2.dateString) {
              markedDate = {
                'date': fullDate,
                'type': 4,
                'detail': getDate.title
              }
              markedDates.push(markedDate);
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
  withOfDate,
  calendarOfDate,
  calendarOfDetail
};