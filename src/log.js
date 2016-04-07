export default function log(a) {
  if (this && this.log && typeof this.log === 'function') {
    this.log(a);
  } else {
    console.log(a); // eslint-disable-line no-console
  }

  return a;
}
