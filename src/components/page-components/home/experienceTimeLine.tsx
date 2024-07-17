// // import {
// //   calcAllTimeInDays,
// //   calcPercentageOfDateComparedDays,
// //   convertDateToMonthAndYear,
// // } from "@/utils";
// import { MdOutlineLogin, MdOutlineLogout, MdOutlineWork } from "react-icons/md";

// export interface ExperienceTimeLineProps {
//   timeLine: {
//     id: number;
//     title: string;
//     comment: string;
//     startedAt: Date;
//     endedAt?: Date;
//     current: boolean;
//   }[];
// }

// interface TimeLineDotProps {
//   date: Date;
//   positionDate: string;
//   positionDot: string;
//   current?: boolean;
// }

// interface TimeLineCardProps {
//   title: string;
//   comment: string;
//   positionCard: string;
// }

// const TimeLineDot = ({
//   date,
//   positionDate,
//   positionDot,
//   current,
// }: TimeLineDotProps) => {
//   return (
//     <div
//       className={`absolute ${positionDot} flex items-center bg-white text-blue justify-center w-8 h-8 rounded-full ring-4 ring-white dark:ring-dark-blue dark:bg-blue-900`}
//     >
//       <MdOutlineLogout size={22} />
//       <span className={`absolute ${positionDate} w-32 text-left`}>
//         {current ? "Presente" : convertDateToMonthAndYear(date)}
//       </span>
//     </div>
//   );
// };

// const TimeLineCard = ({ title, comment, positionCard }: TimeLineCardProps) => {
//   return (
//     <div
//       className={`absolute ${positionCard} w-72 p-3 h-auto flex flex-col bg-white dark:bg-blue-900 rounded-md shadow-lg`}
//     >
//       <h2 className="text-blue font-black text-sm">{title}</h2>
//       <p className="text-blue text-base leading-5 mt-1">{comment}</p>
//     </div>
//   );
// };

// export default function ExperienceTimeLine({
//   timeLine,
// }: ExperienceTimeLineProps) {
//   const hasOneElement = timeLine.length === 1;
//   const allTimeInDays = calcAllTimeInDays(
//     timeLine.map((time) => {
//       return { startedAt: time.startedAt, endedAt: time.endedAt };
//     })
//   );

//   return (
//     <div className="relative flex justify-center items-center h-full">
//       <hr className="time-line border-gray-200 dark:border-dark-blue" />
//       {timeLine.map((time, index) => {
//         const isFirstElement = index === 0;
//         const isLastElement = index === timeLine.length - 1;
//         const even = index % 2 === 0;

//         const percentageCalc = calcPercentageOfDateComparedDays({
//           startedAt: time.startedAt,
//           endedAt: time.endedAt,
//           days: allTimeInDays,
//         });

//         const percentage = Math.round(percentageCalc);
//         const percentageCard = percentage / 2;

//         const positionDotText = `${
//           !even ? "left-12 text-left" : "right-12 text-right"
//         }`;
//         const positionDot = `top-[${percentage}%]`;
//         const positionCard = `top-[${percentageCard}%] ${
//           even ? "left-[1.5rem]" : "right-[1.5rem]"
//         }`;

//         console.log(time);
//         console.log(`Dot ${positionDot}`, `Card: ${positionCard}`);

//         return (
//           <div
//             className="relative flex justify-center items-center h-full"
//             key={time.id}
//           >
//             {isFirstElement && (
//               <>
//                 <TimeLineCard
//                   title={time.title}
//                   comment={time.comment}
//                   positionCard={!hasOneElement ? positionCard : ""}
//                 />
//                 <TimeLineDot
//                   date={time.startedAt}
//                   positionDate={positionDotText}
//                   positionDot="bottom-0"
//                 />
//               </>
//             )}
//             {isFirstElement &&
//               hasOneElement &&
//               !time.current &&
//               time.endedAt && (
//                 <TimeLineDot
//                   positionDot="top-0"
//                   date={time.endedAt}
//                   positionDate={positionDotText}
//                 />
//               )}
//             {!isFirstElement && !isLastElement && !time.current && (
//               <>
//                 <TimeLineDot
//                   date={time.startedAt}
//                   positionDate={positionDotText}
//                   positionDot={positionDot}
//                 />
//               </>
//             )}
//             {isLastElement && time.current && (
//               <>
//                 <TimeLineDot
//                   positionDot={positionDot}
//                   date={time.startedAt}
//                   positionDate={positionDotText}
//                 />
//                 <TimeLineCard
//                   positionCard={positionCard}
//                   title={time.title}
//                   comment={time.comment}
//                 />
//                 <TimeLineDot
//                   positionDot="top-0"
//                   date={time.startedAt}
//                   positionDate={positionDotText}
//                   current
//                 />
//               </>
//             )}
//             {isLastElement && !time.current && time.endedAt && (
//               <>
//                 <TimeLineDot
//                   positionDot={positionDot}
//                   date={time.startedAt}
//                   positionDate={positionDotText}
//                 />
//                 {/* <TimeLineCard
//                   positionCard={positionCard}
//                   title={time.title}
//                   comment={time.comment}
//                 /> */}
//                 <TimeLineDot
//                   positionDot="top-0"
//                   date={time.endedAt}
//                   positionDate="left-12 text-left"
//                 />
//               </>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
