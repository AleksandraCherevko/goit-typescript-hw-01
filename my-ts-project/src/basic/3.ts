// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну,
// яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let contactCard: string | number;

contactCard = "Poly";
contactCard = 42;

let status: "enable" | "disable";

status = "enable";
status = "disable";
