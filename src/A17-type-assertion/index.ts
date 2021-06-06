const body2 = document.querySelector('body') as HTMLElement; // non null assertion (!);
body2.style.background = 'red';

const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';
