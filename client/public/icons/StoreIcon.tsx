import React from "react";
export const StoreIcon = ({
  fill = 'currentColor',
  filled = false,
  size = 'normal',
  height = '18px',
  width = '18px',
  label = '',
  ...props
}) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.59062 6.40876C3.64503 7.46317 5.35458 7.46317 6.40899 6.40876C6.53856 6.27919 6.65221 6.13973 6.74994 5.9928C7.23367 6.72021 8.06075 7.1996 8.9998 7.1996C9.93898 7.1996 10.7662 6.72008 11.2499 5.99251C11.3476 6.13955 11.4614 6.27912 11.591 6.40879C12.6454 7.46321 14.355 7.46321 15.4094 6.40879C16.4638 5.35437 16.4638 3.64483 15.4094 2.59041L15.146 2.32701C14.8084 1.98945 14.3506 1.7998 13.8732 1.7998H4.12678C3.64939 1.7998 3.19155 1.98945 2.85399 2.32701L2.59062 2.59038C1.5362 3.6448 1.5362 5.35434 2.59062 6.40876Z" fill="white" />
      <path d="M2.6998 8.12881C3.985 8.76641 5.53834 8.67936 6.75031 7.86765C7.39329 8.29787 8.16705 8.5496 8.9998 8.5496C9.83264 8.5496 10.6065 8.29782 11.2495 7.86753C12.4614 8.67929 14.0146 8.76647 15.2998 8.12904V14.8498H15.5248C15.8976 14.8498 16.1998 15.152 16.1998 15.5248C16.1998 15.8976 15.8976 16.1998 15.5248 16.1998H11.4748C11.102 16.1998 10.7998 15.8976 10.7998 15.5248V12.3748C10.7998 12.002 10.4976 11.6998 10.1248 11.6998H7.8748C7.50201 11.6998 7.1998 12.002 7.1998 12.3748V15.5248C7.1998 15.8976 6.8976 16.1998 6.52481 16.1998H2.4748C2.10201 16.1998 1.7998 15.8976 1.7998 15.5248C1.7998 15.152 2.10201 14.8498 2.4748 14.8498H2.6998V8.12881Z" fill="white" />
    </svg>
  );
};