// import { useState, useEffect } from "react";
// interface UseFuncType {
//   id: number;
//   text: string;
//   checkHover: boolean;
//   checkUpdate: boolean;
//   fetData: any;
//   setFetData: any;
// }

// const useFunc = ({
//   id,
//   text,
//   checkHover,
//   checkUpdate,
//   fetData,
//   setFetData,
// }: UseFuncType) => {
//   let filterFetData = fetData.filter((el: any) => el.id === id);
//   let indexData = fetData.findIndex(
//     (data: any) => data.id === filterFetData[0].id
//   );
//   if (indexData === 0) {
//     return (fetData = [
//       // ...fetData.slice(indexData, indexData + 1),
//       {
//         id: filterFetData[0].id,
//         text: filterFetData[0].text,
//         checkHover: filterFetData[0].checkHover,
//         checkUpdate: !filterFetData[0].checkUpdate,
//       },
//       ...fetData.slice(indexData + 1, fetData.length),
//     ]);
//   } else {
//     return (fetData = [
//       ...fetData.slice(0, indexData),
//       {
//         id: filterFetData[0].id,
//         text: filterFetData[0].text,
//         checkHover: filterFetData[0].checkHover,
//         checkUpdate: !filterFetData[0].checkUpdate,
//       },
//       ...fetData.slice(indexData + 1, fetData.length),
//     ]);
//   }
// };
const useFunc = () => {};
export default useFunc;
