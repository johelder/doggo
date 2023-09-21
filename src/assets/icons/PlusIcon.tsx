import React from 'react';
import { Path, Svg } from 'react-native-svg';

import type { IconProps } from './types';

export function PlusIcon({ size, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 28" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.971 4.00846C25.1333 4.13038 26.2018 4.70189 26.9485 5.60096H26.9535C27.6442 6.42241 28.0186 7.46367 28.0091 8.53688C27.9996 9.61008 27.6068 10.6446 26.9017 11.4536C26.1965 12.2627 25.2254 12.7932 24.1636 12.9492C23.1017 13.1053 22.0191 12.8767 21.111 12.3047H21.0985L20.2255 13.1778C19.6946 12.7267 19.0683 12.3846 18.3811 12.1859L19.6835 10.8835C20.005 10.5623 20.4262 10.3602 20.8779 10.3105C21.3296 10.2607 21.7848 10.3662 22.1685 10.6097C22.6724 10.925 23.2723 11.0503 23.8603 10.9633C24.4484 10.8762 24.9862 10.5825 25.3772 10.1347L25.3722 10.141C25.714 9.75484 25.9281 9.27245 25.985 8.75992C26.042 8.24739 25.939 7.72978 25.6903 7.27804C25.4416 6.82631 25.0592 6.46254 24.5957 6.2366C24.1321 6.01065 23.61 5.93359 23.101 6.01596C22.9454 6.04029 22.7862 6.02754 22.6365 5.97873C22.4868 5.92992 22.3507 5.84643 22.2393 5.73508C22.128 5.62372 22.0445 5.48764 21.9957 5.33792C21.9469 5.18819 21.9341 5.02905 21.9585 4.87346C22.0201 4.47508 21.9845 4.06768 21.8547 3.68603C21.7249 3.30437 21.5047 2.95976 21.2129 2.68159C20.9212 2.40342 20.5664 2.19994 20.179 2.08849C19.7916 1.97704 19.383 1.96094 18.988 2.04155C18.593 2.12216 18.2234 2.29709 17.9106 2.55144C17.5978 2.80578 17.3512 3.13199 17.1917 3.50224C17.0323 3.8725 16.9648 4.27583 16.9949 4.67783C17.025 5.07984 17.1519 5.4686 17.3647 5.81096C17.6075 6.19363 17.7132 6.64743 17.6644 7.098C17.6155 7.54857 17.4151 7.96919 17.096 8.29096L8.29596 17.091C7.97447 17.4121 7.55319 17.6142 7.10151 17.664C6.64982 17.7137 6.19466 17.6082 5.81096 17.3647C5.46826 17.1533 5.07956 17.0278 4.67795 16.999C4.27633 16.9701 3.87367 17.0386 3.50424 17.1987C3.1348 17.3589 2.8095 17.6059 2.55603 17.9187C2.30256 18.2316 2.1284 18.6011 2.04838 18.9957C1.96836 19.3903 1.98485 19.7984 2.09643 20.1853C2.20802 20.5722 2.4114 20.9264 2.68928 21.2178C2.96716 21.5092 3.31131 21.7292 3.69246 21.859C4.07361 21.9888 4.48049 22.0247 4.87846 21.9635C4.92934 21.9556 4.98073 21.9514 5.03221 21.951C5.17671 21.9508 5.31952 21.982 5.45081 22.0424C5.5821 22.1028 5.69874 22.1909 5.79271 22.3006C5.88668 22.4104 5.95575 22.5392 5.99515 22.6783C6.03455 22.8173 6.04336 22.9632 6.02096 23.106C5.9593 23.5043 5.99489 23.9117 6.1247 24.2934C6.25452 24.6751 6.4747 25.0197 6.76648 25.2978C7.05827 25.576 7.41299 25.7795 7.80041 25.8909C8.18783 26.0024 8.59645 26.0185 8.99144 25.9379C9.38643 25.8573 9.75607 25.6823 10.0688 25.428C10.3816 25.1736 10.6282 24.8474 10.7877 24.4772C10.9471 24.1069 11.0147 23.7036 10.9846 23.3016C10.9544 22.8996 10.8276 22.5108 10.6147 22.1685C10.3706 21.7853 10.2642 21.3305 10.3131 20.8788C10.3619 20.4271 10.5631 20.0056 10.8835 19.6835L12.1858 18.3811C12.3846 19.0685 12.7269 19.6951 13.1782 20.2261L12.3047 21.0997C12.3045 21.103 12.3045 21.1064 12.3047 21.1097C12.661 21.6836 12.8835 22.3304 12.9557 23.0021C13.028 23.6737 12.948 24.353 12.7219 24.9896C12.4958 25.6262 12.1292 26.2036 11.6494 26.6792C11.1696 27.1547 10.589 27.5162 9.95043 27.7367C9.3119 27.9572 8.63192 28.0311 7.96093 27.953C7.28993 27.8748 6.64514 27.6466 6.07438 27.2852C5.50363 26.9239 5.02155 26.4386 4.66391 25.8656C4.30627 25.2925 4.08225 24.6462 4.00846 23.9747C3.33697 23.9009 2.69071 23.6769 2.11762 23.3193C1.54453 22.9616 1.0593 22.4795 0.697947 21.9088C0.33659 21.338 0.10837 20.6932 0.0302171 20.0223C-0.047936 19.3513 0.0259828 18.6713 0.24649 18.0327C0.466998 17.3942 0.828435 16.8135 1.30399 16.3337C1.77955 15.854 2.35702 15.4874 2.99358 15.2613C3.63013 15.0351 4.30944 14.9552 4.98109 15.0274C5.65275 15.0996 6.29954 15.3222 6.87346 15.6785H6.88596L15.6747 6.88346C15.6752 6.88015 15.6752 6.87677 15.6747 6.87346C15.3184 6.29954 15.0959 5.65275 15.0237 4.98109C14.9515 4.30944 15.0314 3.63013 15.2575 2.99358C15.4837 2.35702 15.8502 1.77955 16.33 1.30399C16.8098 0.828435 17.3905 0.466998 18.029 0.24649C18.6675 0.0259828 19.3475 -0.047936 20.0185 0.0302171C20.6895 0.10837 21.3343 0.33659 21.905 0.697947C22.4758 1.0593 22.9579 1.54453 23.3155 2.11762C23.6732 2.69071 23.8972 3.33697 23.971 4.00846Z"
        fill={color}
      />
      <Path
        d="M16.4897 10.9897C15.4019 10.9897 14.3386 11.3123 13.4341 11.9167C12.5296 12.521 11.8247 13.38 11.4084 14.385C10.9921 15.39 10.8832 16.4958 11.0954 17.5627C11.3076 18.6296 11.8314 19.6096 12.6006 20.3788C13.3698 21.148 14.3498 21.6718 15.4167 21.8841C16.4836 22.0963 17.5895 21.9874 18.5945 21.5711C19.5995 21.1548 20.4585 20.4499 21.0628 19.5454C21.6671 18.6409 21.9897 17.5775 21.9897 16.4897C21.9881 15.0316 21.4081 13.6335 20.377 12.6024C19.3459 11.5713 17.9479 10.9914 16.4897 10.9897ZM16.4897 20.7675C15.6437 20.7675 14.8166 20.5166 14.1131 20.0466C13.4096 19.5765 12.8613 18.9084 12.5376 18.1268C12.2138 17.3451 12.1291 16.485 12.2941 15.6552C12.4592 14.8254 12.8666 14.0632 13.4649 13.4649C14.0631 12.8666 14.8254 12.4592 15.6552 12.2942C16.485 12.1291 17.3451 12.2138 18.1268 12.5376C18.9084 12.8614 19.5765 13.4097 20.0466 14.1131C20.5166 14.8166 20.7675 15.6437 20.7675 16.4897C20.7663 17.6239 20.3152 18.7113 19.5132 19.5132C18.7112 20.3152 17.6239 20.7663 16.4897 20.7675ZM19.1379 16.4897C19.1379 16.6518 19.0735 16.8073 18.9589 16.9219C18.8443 17.0365 18.6888 17.1009 18.5268 17.1009H17.1008V18.5268C17.1008 18.6889 17.0364 18.8443 16.9218 18.9589C16.8072 19.0735 16.6518 19.1379 16.4897 19.1379C16.3276 19.1379 16.1722 19.0735 16.0576 18.9589C15.943 18.8443 15.8786 18.6889 15.8786 18.5268V17.1009H14.4527C14.2906 17.1009 14.1352 17.0365 14.0206 16.9219C13.906 16.8073 13.8416 16.6518 13.8416 16.4897C13.8416 16.3277 13.906 16.1722 14.0206 16.0576C14.1352 15.943 14.2906 15.8786 14.4527 15.8786H15.8786V14.4527C15.8786 14.2906 15.943 14.1352 16.0576 14.0206C16.1722 13.906 16.3276 13.8416 16.4897 13.8416C16.6518 13.8416 16.8072 13.906 16.9218 14.0206C17.0364 14.1352 17.1008 14.2906 17.1008 14.4527V15.8786H18.5268C18.6888 15.8786 18.8443 15.943 18.9589 16.0576C19.0735 16.1722 19.1379 16.3277 19.1379 16.4897Z"
        fill={color}
      />
    </Svg>
  );
}
