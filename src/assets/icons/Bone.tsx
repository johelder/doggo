import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function Bone({ size = 24, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.9588 7.61122C28.2121 6.71215 27.1436 6.14063 25.9813 6.01872C25.9075 5.34723 25.6835 4.70097 25.3258 4.12787C24.9682 3.55478 24.4861 3.06956 23.9154 2.7082C23.3446 2.34684 22.6998 2.11862 22.0288 2.04047C21.3578 1.96232 20.6778 2.03624 20.0393 2.25674C19.4008 2.47725 18.8201 2.83869 18.3403 3.31425C17.8605 3.7898 17.494 4.36728 17.2678 5.00383C17.0417 5.64039 16.9618 6.31969 17.034 6.99135C17.1062 7.66301 17.3287 8.30979 17.685 8.88372C17.6856 8.88703 17.6856 8.89041 17.685 8.89372L8.89628 17.6887C8.89628 17.6887 8.89628 17.6887 8.88378 17.6887C8.30985 17.3324 7.66307 17.1099 6.99141 17.0377C6.31975 16.9655 5.64045 17.0454 5.00389 17.2715C4.36734 17.4977 3.78986 17.8642 3.31431 18.344C2.83875 18.8238 2.47731 19.4045 2.25681 20.043C2.0363 20.6815 1.96238 21.3615 2.04053 22.0325C2.11869 22.7035 2.3469 23.3483 2.70826 23.919C3.06962 24.4898 3.55484 24.9719 4.12793 25.3295C4.70103 25.6872 5.34729 25.9112 6.01878 25.985C6.09257 26.6565 6.31659 27.3027 6.67423 27.8758C7.03187 28.4489 7.51394 28.9341 8.0847 29.2955C8.65546 29.6568 9.30025 29.8851 9.97124 29.9632C10.6422 30.0414 11.3222 29.9674 11.9607 29.7469C12.5993 29.5264 13.18 29.165 13.6597 28.6894C14.1395 28.2139 14.5061 27.6364 14.7322 26.9999C14.9584 26.3633 15.0383 25.684 14.9661 25.0123C14.8938 24.3407 14.6713 23.6939 14.315 23.12C14.3148 23.1166 14.3148 23.1133 14.315 23.11L23.1088 14.315C23.1088 14.315 23.1088 14.315 23.1213 14.315C24.0294 14.887 25.1121 15.1155 26.1739 14.9595C27.2357 14.8034 28.2068 14.273 28.912 13.4639C29.6171 12.6548 30.0099 11.6203 30.0194 10.5471C30.0289 9.47392 29.6545 8.43266 28.9638 7.61122H28.9588ZM27.3875 12.145C26.9965 12.5927 26.4587 12.8865 25.8706 12.9735C25.2826 13.0606 24.6828 12.9352 24.1788 12.62C23.7951 12.3765 23.3399 12.271 22.8882 12.3207C22.4365 12.3705 22.0153 12.5726 21.6938 12.8937L12.8938 21.6937C12.5734 22.0158 12.3722 22.4374 12.3234 22.8891C12.2746 23.3407 12.3809 23.7956 12.625 24.1787C12.8379 24.5211 12.9648 24.9098 12.9949 25.3118C13.025 25.7139 12.9574 26.1172 12.798 26.4874C12.6385 26.8577 12.3919 27.1839 12.0792 27.4382C11.7664 27.6926 11.3967 27.8675 11.0018 27.9481C10.6068 28.0287 10.1981 28.0126 9.81072 27.9012C9.4233 27.7897 9.06858 27.5863 8.7768 27.3081C8.48502 27.0299 8.26483 26.6853 8.13502 26.3037C8.00521 25.922 7.96961 25.5146 8.03128 25.1162C8.05368 24.9735 8.04487 24.8276 8.00547 24.6885C7.96606 24.5495 7.897 24.4207 7.80303 24.3109C7.70906 24.2011 7.59241 24.113 7.46112 24.0527C7.32984 23.9923 7.18703 23.9611 7.04253 23.9612C6.99104 23.9617 6.93966 23.9658 6.88878 23.9737C6.4908 24.0349 6.08393 23.9991 5.70278 23.8692C5.32163 23.7394 4.97747 23.5195 4.69959 23.2281C4.42171 22.9367 4.21833 22.5824 4.10675 22.1956C3.99516 21.8087 3.97868 21.4006 4.0587 21.0059C4.13872 20.6113 4.31287 20.2419 4.56634 19.929C4.81982 19.6161 5.14511 19.3691 5.51455 19.209C5.88399 19.0488 6.28664 18.9803 6.68826 19.0092C7.08988 19.0381 7.47857 19.1636 7.82128 19.375C8.20497 19.6184 8.66014 19.724 9.11182 19.6742C9.56351 19.6245 9.98478 19.4224 10.3063 19.1012L19.1063 10.3012C19.4254 9.97945 19.6258 9.55882 19.6747 9.10825C19.7235 8.65768 19.6178 8.20389 19.375 7.82122C19.1622 7.47885 19.0353 7.09009 19.0052 6.68809C18.9751 6.28608 19.0426 5.88276 19.2021 5.5125C19.3615 5.14224 19.6081 4.81603 19.9209 4.56169C20.2337 4.30735 20.6033 4.13241 20.9983 4.0518C21.3933 3.97119 21.8019 3.9873 22.1893 4.09874C22.5768 4.21019 22.9315 4.41368 23.2233 4.69185C23.515 4.97002 23.7352 5.31462 23.865 5.69628C23.9948 6.07794 24.0304 6.48533 23.9688 6.88372C23.9444 7.03931 23.9572 7.19844 24.006 7.34817C24.0548 7.4979 24.1383 7.63398 24.2497 7.74533C24.361 7.85669 24.4971 7.94017 24.6468 7.98898C24.7966 8.03779 24.9557 8.05055 25.1113 8.02622C25.6203 7.94384 26.1424 8.02091 26.606 8.24685C27.0695 8.47279 27.4519 8.83656 27.7006 9.2883C27.9493 9.74004 28.0523 10.2576 27.9953 10.7702C27.9384 11.2827 27.7243 11.7651 27.3825 12.1512L27.3875 12.145Z"
        fill={color}
      />
    </Svg>
  );
}
