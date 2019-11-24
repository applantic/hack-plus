import React from 'react';
import { SvgIcon } from '@material-ui/core';

export default function ArrowIcon(props) {
  return (
    <SvgIcon {...props} width="110" height="21" viewBox="0 0 110 21">
    <path d="M2.79301 18.9255C2.68348 19.2979 2.54109 19.6374 2.36584 19.9441C2.19059 20.2289 2.00439 20.3932 1.80724 20.437C1.39103 20.5465 1.07339 20.4808 0.854331 20.2399C0.635272 19.9989 0.547648 19.6922 0.59146 19.3198C0.766708 18.0054 1.05148 16.6254 1.44579 15.1796C1.8401 13.7119 2.30012 12.2551 2.82587 10.8093C3.35161 9.34165 3.92116 7.92872 4.53453 6.57055C5.1698 5.19047 5.81603 3.94184 6.4732 2.82463C6.58273 2.64939 6.70322 2.55081 6.83465 2.5289C6.98799 2.48509 7.11943 2.48509 7.22896 2.5289C7.33849 2.44128 7.46992 2.36461 7.62327 2.29889C7.77661 2.23317 7.92995 2.20031 8.08329 2.20031C8.14901 2.20031 8.21473 2.21127 8.28044 2.23317C8.36807 2.25508 8.45569 2.3208 8.54332 2.43033C8.63094 2.53986 8.72952 2.70415 8.83905 2.92321C8.97048 3.12036 9.12382 3.41609 9.29907 3.8104C9.60575 4.9276 9.95625 6.07766 10.3506 7.26058C10.7668 8.44351 11.1939 9.62643 11.6321 10.8093C11.6978 10.7874 11.7525 10.7765 11.7963 10.7765C11.8621 10.7546 11.9278 10.7327 11.9935 10.7108C12.2345 10.6889 12.5083 10.6998 12.815 10.7436C13.1217 10.7874 13.3298 10.9408 13.4393 11.2037C13.5707 11.5322 13.5488 11.817 13.3736 12.058C13.1983 12.299 12.8807 12.5399 12.4207 12.7809C12.7054 13.4819 12.9902 14.1719 13.275 14.851C13.5598 15.5082 13.8555 16.1544 14.1622 16.7897C14.1841 16.8992 14.217 17.0744 14.2608 17.3154C14.3046 17.5345 14.3265 17.7645 14.3265 18.0054C14.3484 18.2245 14.3374 18.4326 14.2936 18.6298C14.2498 18.8269 14.1622 18.9584 14.0308 19.0241C13.8774 19.0898 13.7131 19.0788 13.5379 18.9912C13.3845 18.9036 13.2312 18.7941 13.0778 18.6626C12.9245 18.5093 12.7821 18.3559 12.6507 18.2026C12.5411 18.0274 12.4535 17.874 12.3878 17.7426C12.0154 17.0197 11.654 16.2968 11.3035 15.5739C10.9749 14.8291 10.6572 14.0843 10.3506 13.3395C9.43051 13.5147 8.42283 13.6681 7.32754 13.7995C6.25414 13.9309 5.19171 14.0186 4.14022 14.0624C3.89926 14.8948 3.65829 15.7163 3.41733 16.5268C3.19827 17.3154 2.99016 18.115 2.79301 18.9255ZM7.45897 5.12476C6.4513 7.38107 5.57506 9.63738 4.83026 11.8937C6.29796 11.8499 7.86423 11.6637 9.52908 11.3351C8.74047 9.34165 8.05043 7.27154 7.45897 5.12476ZM18.2354 4.9276C18.3449 5.6724 18.4654 6.45007 18.5969 7.26058C18.7283 8.0492 18.8597 8.90353 18.9912 9.82358C19.9988 9.18831 21.0503 8.55304 22.1456 7.91776C23.2628 7.26059 24.3034 6.73484 25.2672 6.34054C25.3548 6.31863 25.4644 6.31863 25.5958 6.34054C25.7491 6.34054 25.9025 6.37339 26.0558 6.43911C26.2092 6.48292 26.3406 6.54864 26.4501 6.63627C26.5597 6.72389 26.6363 6.83342 26.6801 6.96485C26.724 7.1182 26.6911 7.3263 26.5816 7.58917C26.472 7.83014 26.3516 7.97253 26.2201 8.01634C25.9572 8.16968 25.6068 8.37779 25.1686 8.64066C24.7524 8.88162 24.3034 9.1445 23.8214 9.42927C23.3614 9.71405 22.9014 9.99883 22.4413 10.2836C22.0032 10.5684 21.6308 10.8093 21.3241 11.0065C22.5728 11.6856 23.7886 12.2661 24.9715 12.748C26.1763 13.23 27.4469 13.6243 28.7831 13.9309C28.9146 13.9528 29.046 14.0405 29.1774 14.1938C29.3308 14.3252 29.4512 14.4895 29.5389 14.6867C29.6265 14.8839 29.6703 15.081 29.6703 15.2782C29.6922 15.4753 29.6484 15.6506 29.5389 15.8039C29.4074 15.9791 29.2212 16.0887 28.9803 16.1325C28.7612 16.1544 28.5312 16.1434 28.2902 16.0996C26.6254 15.7053 25.1029 15.2234 23.7228 14.6538C22.3428 14.0624 20.897 13.3504 19.3855 12.518C19.495 13.46 19.5936 14.4348 19.6812 15.4425C19.7907 16.4501 19.8893 17.5126 19.9769 18.6298C19.9769 18.8707 19.8784 19.0131 19.6812 19.0569C19.484 19.0788 19.265 19.0679 19.024 19.0241C18.7831 18.9803 18.564 18.9036 18.3668 18.7941C18.1697 18.6845 18.0492 18.575 18.0054 18.4655C17.874 17.4578 17.7316 16.3954 17.5782 15.2782C17.4468 14.161 17.2935 13.0328 17.1182 11.8937C16.943 10.7327 16.7568 9.59357 16.5596 8.47636C16.3624 7.33726 16.1653 6.25291 15.9681 5.22333C15.9243 4.98237 15.9791 4.70854 16.1324 4.40186C16.2858 4.07327 16.5706 3.88707 16.9868 3.84326C17.1401 3.84326 17.2825 3.88707 17.4139 3.97469C17.5673 4.04041 17.6987 4.13899 17.8082 4.27042C17.9397 4.37996 18.0383 4.50044 18.104 4.63187C18.1697 4.7414 18.2135 4.83998 18.2354 4.9276ZM44.5664 5.81479C42.3101 5.70526 40.1414 5.88051 38.0604 6.34054C35.9793 6.80056 33.9201 7.42488 31.8829 8.21349C31.3571 8.41065 30.9519 8.38874 30.6671 8.14778C30.4042 7.90681 30.2728 7.66584 30.2728 7.42488C30.4261 7.00867 30.7 6.66913 31.0943 6.40625C35.585 4.21566 40.0757 3.40514 44.5664 3.97469C44.7855 4.04041 44.9607 4.20471 45.0922 4.46758C45.2455 4.70854 45.3003 4.91665 45.2565 5.0919C45.2127 5.31096 45.1469 5.49716 45.0593 5.6505C44.9717 5.78194 44.8074 5.8367 44.5664 5.81479ZM39.9005 17.2826C39.9005 17.5235 39.8128 17.7426 39.6376 17.9397C39.4843 18.115 39.2871 18.2245 39.0461 18.2683C38.608 18.334 38.3232 18.2574 38.1918 18.0383C38.0604 17.8192 37.9837 17.5673 37.9618 17.2826C37.9399 15.7491 37.907 14.2267 37.8632 12.7152C37.8413 11.1817 37.7756 9.64833 37.6661 8.11492C37.6661 8.02729 37.6551 7.92872 37.6332 7.81919C37.6113 7.68775 37.6113 7.56727 37.6332 7.45774C37.6551 7.3263 37.6989 7.21677 37.7646 7.12915C37.8523 7.04153 37.9837 6.97581 38.1589 6.932C38.6628 6.84437 39.0242 6.932 39.2433 7.19487C39.4623 7.43583 39.5719 7.6768 39.5719 7.91776C39.7471 9.49499 39.8567 11.0613 39.9005 12.6166C39.9443 14.1719 39.9443 15.7272 39.9005 17.2826ZM53.1809 11.5651C53.0932 11.9156 53.0056 12.4304 52.918 13.1095C52.8523 13.7666 52.7865 14.4676 52.7208 15.2124C52.677 15.9353 52.6332 16.6363 52.5894 17.3154C52.5675 17.9945 52.5565 18.5202 52.5565 18.8926C52.5565 19.5279 52.206 19.8455 51.505 19.8455C51.2641 19.8455 51.0341 19.7798 50.815 19.6484C50.6179 19.517 50.5193 19.265 50.5193 18.8926C50.5193 17.9726 50.5521 16.9759 50.6179 15.9025C50.6836 14.8291 50.7712 13.7228 50.8807 12.5837C50.114 11.1817 49.3911 9.80167 48.712 8.44351C48.0549 7.08534 47.4963 5.8367 47.0362 4.69759C46.9486 4.50044 46.8719 4.29233 46.8062 4.07327C46.7624 3.83231 46.7405 3.61325 46.7405 3.41609C46.7624 3.21894 46.8172 3.05465 46.9048 2.92321C46.9924 2.76987 47.1458 2.67129 47.3648 2.62748C47.6058 2.60557 47.8358 2.62748 48.0549 2.6932C48.2958 2.73701 48.5039 2.8794 48.6792 3.12036C48.8544 3.58039 49.0735 4.10613 49.3364 4.69759C49.5992 5.28905 49.8731 5.89146 50.1578 6.50483C50.4426 7.1182 50.7274 7.70966 51.0122 8.27921C51.2969 8.82686 51.5489 9.29784 51.7679 9.69214C52.7537 8.37779 53.6847 7.03057 54.5609 5.6505C55.4591 4.27043 56.2915 2.95607 57.0582 1.70743C57.343 1.26931 57.6387 1.02835 57.9454 0.984535C58.2521 0.940723 58.504 1.00644 58.7011 1.18169C58.8764 1.31312 58.975 1.53218 58.9969 1.83887C59.0407 2.14555 59.0078 2.41937 58.8983 2.66034C58.5259 3.31752 58.0878 4.04041 57.5839 4.82903C57.102 5.59573 56.5982 6.3734 56.0724 7.16201C55.5686 7.95062 55.0648 8.72828 54.5609 9.49499C54.0571 10.2617 53.5971 10.9517 53.1809 11.5651ZM80.1195 6.2091C79.4842 7.85205 78.7394 9.57166 77.8851 11.3679C77.0527 13.1423 76.056 14.9058 74.8949 16.6582C74.5663 17.1621 74.1939 17.414 73.7777 17.414C73.5149 17.414 73.2958 17.3592 73.1206 17.2497C72.9453 17.1183 72.792 16.954 72.6605 16.7568C72.091 15.8806 71.5762 14.9496 71.1162 13.9638C70.6561 12.978 70.2071 11.8608 69.7689 10.6122C69.1337 11.7294 68.4217 12.8576 67.6331 13.9967C66.8664 15.1358 66.023 16.1982 65.103 17.184C64.9277 17.3811 64.7415 17.5126 64.5444 17.5783C64.3691 17.644 64.2267 17.6659 64.1172 17.644C63.6572 17.5783 63.2957 17.2935 63.0329 16.7897C62.2224 15.2782 61.6747 13.6133 61.3899 11.7951C61.1051 9.97692 60.9518 8.11492 60.9299 6.2091C60.9299 6.03385 60.9956 5.8586 61.1271 5.68336C61.2585 5.50811 61.4556 5.43144 61.7185 5.45335C62.1128 5.47525 62.4195 5.62859 62.6386 5.91337C62.8576 6.17624 62.9891 6.50483 63.0329 6.89914C63.0767 7.44679 63.1314 8.0711 63.1972 8.77209C63.2629 9.45118 63.3505 10.1522 63.46 10.8751C63.5696 11.598 63.712 12.299 63.8872 12.978C64.0625 13.6571 64.2815 14.2486 64.5444 14.7524C64.873 14.3362 65.2235 13.8762 65.5959 13.3723C65.9683 12.8685 66.3297 12.3428 66.6802 11.7951C67.0526 11.2475 67.4031 10.6998 67.7317 10.1522C68.0603 9.58261 68.356 9.02401 68.6189 8.47636C68.7941 8.10396 69.0132 7.863 69.2761 7.75347C69.5389 7.64394 69.747 7.58917 69.9004 7.58917C70.5576 7.58917 71.0066 7.90681 71.2476 8.54208C71.62 9.46213 71.9924 10.4369 72.3648 11.4665C72.7591 12.4961 73.1863 13.4709 73.6463 14.391C74.0406 13.7776 74.4459 13.0876 74.8621 12.3209C75.2783 11.5541 75.6835 10.7765 76.0779 9.98787C76.4722 9.17735 76.8446 8.36683 77.1951 7.55632C77.5675 6.7458 77.896 5.97909 78.1808 5.25619C78.2904 4.99332 78.4766 4.77426 78.7394 4.59901C79.0023 4.42377 79.2871 4.43472 79.5938 4.63187C79.8347 4.78521 79.999 5.03713 80.0866 5.38763C80.1962 5.71622 80.2071 5.99004 80.1195 6.2091ZM92.0303 10.7436C92.118 10.9627 92.0303 11.1817 91.7675 11.4008C91.5046 11.598 91.0884 11.7294 90.5188 11.7951C89.5331 11.9265 88.5254 12.0689 87.4958 12.2223C86.4662 12.3537 85.4147 12.4961 84.3414 12.6494C84.2975 13.7666 84.2975 14.8839 84.3414 16.0011C84.8452 16.0011 85.4476 15.9572 86.1486 15.8696C86.8715 15.7601 87.6053 15.6287 88.3501 15.4753C89.0949 15.322 89.8069 15.1686 90.486 15.0153C91.187 14.84 91.7784 14.6977 92.2604 14.5881C92.5013 14.5224 92.7532 14.4786 93.0161 14.4567C93.279 14.4129 93.509 14.4129 93.7061 14.4567C93.9252 14.4786 94.1005 14.5553 94.2319 14.6867C94.3633 14.8181 94.429 15.0043 94.429 15.2453C94.429 15.311 94.3524 15.4096 94.199 15.541C94.0457 15.6725 93.8485 15.8149 93.6076 15.9682C93.3885 16.0996 93.1475 16.2311 92.8847 16.3625C92.6437 16.472 92.4246 16.5597 92.2275 16.6254C90.8693 17.0635 89.5331 17.4468 88.2187 17.7754C86.9044 18.0821 85.6229 18.2464 84.3742 18.2683C83.6513 18.2902 83.1037 18.104 82.7313 17.7097C82.3589 17.2935 82.1617 16.702 82.1398 15.9353C82.096 14.8619 82.096 13.7776 82.1398 12.6823C81.7674 12.4632 81.5812 12.1566 81.5812 11.7623C81.625 11.346 81.8222 11.0613 82.1727 10.9079C82.2165 10.2727 82.2493 9.63738 82.2712 9.00211C82.2932 8.34493 82.326 7.6987 82.3698 7.06343C82.1289 7.01962 81.9098 6.89914 81.7126 6.70198C81.5374 6.50483 81.4498 6.28577 81.4498 6.04481C81.4498 5.84765 81.4936 5.6724 81.5812 5.51906C81.6688 5.34382 81.8331 5.21238 82.0741 5.12476C82.4684 5.03713 82.9503 4.93856 83.5199 4.82903C84.0894 4.7195 84.6699 4.62092 85.2614 4.5333C85.8748 4.44567 86.4553 4.369 87.0029 4.30328C87.5725 4.23757 88.0544 4.19375 88.4487 4.17185C88.9087 4.12804 89.3469 4.17185 89.7631 4.30328C90.2012 4.43472 90.6065 4.68664 90.9789 5.05904C91.0665 5.36572 91.0008 5.59573 90.7817 5.74908C90.5845 5.90242 90.3217 6.00099 89.9931 6.04481C89.6645 6.08862 89.2702 6.14338 88.8102 6.2091C88.3501 6.25291 87.8682 6.30768 87.3644 6.37339C86.8824 6.43911 86.3896 6.50483 85.8857 6.57055C85.4038 6.61436 84.9438 6.66912 84.5057 6.73484C84.5057 6.77865 84.5057 6.83342 84.5057 6.89914C84.5276 6.94295 84.5385 6.98676 84.5385 7.03057C84.4947 7.60013 84.4618 8.16968 84.4399 8.73924C84.418 9.30879 84.3961 9.87834 84.3742 10.4479C85.2943 10.2946 86.2362 10.1631 87.2001 10.0536C88.1639 9.92216 88.9307 9.83453 89.5002 9.79072C89.9602 9.74691 90.4093 9.80167 90.8474 9.95502C91.2855 10.1084 91.6798 10.3712 92.0303 10.7436ZM98.213 18.3669C98.1472 17.5564 98.0925 16.6363 98.0487 15.6067C98.0268 14.5772 98.0158 13.5257 98.0158 12.4523C98.0158 11.357 98.0158 10.2836 98.0158 9.23212C98.0377 8.18063 98.0706 7.22773 98.1144 6.37339C98.1144 6.15434 98.213 5.99004 98.4101 5.88051C98.6292 5.74908 98.8044 5.69431 98.9358 5.71622C99.3302 5.76003 99.593 5.90242 99.7245 6.14338C99.8778 6.36244 99.9764 6.68008 100.02 7.09629C99.9983 7.79728 99.9764 8.49827 99.9545 9.19926C99.9545 9.90025 99.9654 10.6012 99.9873 11.3022C100.973 11.127 101.795 10.7655 102.452 10.2179C103.131 9.67024 103.613 9.04592 103.898 8.34493C104.007 8.08206 104.084 7.76442 104.128 7.39202C104.193 7.01962 104.204 6.64722 104.16 6.27482C104.117 5.88051 104.007 5.51906 103.832 5.19047C103.678 4.83998 103.438 4.56616 103.109 4.369C102.627 4.08422 102.101 3.93088 101.532 3.90898C100.962 3.88707 100.371 3.9747 99.7573 4.17185C99.1659 4.3471 98.5744 4.63187 97.9829 5.02618C97.4134 5.42049 96.8767 5.89146 96.3729 6.43911C96.4386 6.7677 96.3948 7.06343 96.2414 7.3263C96.0881 7.56727 95.869 7.74252 95.5842 7.85205C95.409 7.89586 95.2009 7.80823 94.9599 7.58917C94.719 7.34821 94.5985 7.10724 94.5985 6.86628C94.5985 5.99004 94.8394 5.23429 95.3214 4.59901C95.8252 3.94184 96.4495 3.39419 97.1943 2.95607C97.9391 2.51795 98.7387 2.18936 99.593 1.9703C100.447 1.75124 101.236 1.64171 101.959 1.64171C103.032 1.64171 103.93 1.95935 104.653 2.59462C105.376 3.20799 105.869 3.98565 106.132 4.9276C106.592 6.57055 106.471 8.0492 105.77 9.36355C105.091 10.6779 103.974 11.817 102.419 12.7809C103.558 13.4819 104.62 14.15 105.606 14.7853C106.614 15.4205 107.622 16.1106 108.629 16.8554C108.761 16.9868 108.903 17.184 109.056 17.4468C109.232 17.6878 109.21 18.0602 108.991 18.564C108.859 18.8707 108.629 19.046 108.301 19.0898C107.994 19.1117 107.687 19.0131 107.381 18.7941C106.899 18.3998 106.351 17.9945 105.738 17.5783C105.146 17.1402 104.522 16.713 103.865 16.2968C103.208 15.8587 102.55 15.4425 101.893 15.0481C101.236 14.6319 100.612 14.2486 100.02 13.8981C100.042 14.7743 100.053 15.6506 100.053 16.5268C100.075 17.3811 100.108 18.2245 100.152 19.0569C100.152 19.3636 100.064 19.5827 99.8888 19.7141C99.7135 19.8236 99.4944 19.8784 99.2316 19.8784C99.1001 19.8565 98.9797 19.7908 98.8701 19.6813C98.7606 19.5498 98.6511 19.4074 98.5415 19.2541C98.4539 19.0788 98.3772 18.9145 98.3115 18.7612C98.2458 18.586 98.213 18.4545 98.213 18.3669Z" fill="black"/>
    </SvgIcon>
  );
}