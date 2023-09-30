export type RegisterModalProps = {
  open: boolean;
  onClose: () => void;
};

export type RegisterProps = {
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
};
