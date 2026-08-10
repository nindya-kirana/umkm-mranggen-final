export function formatWhatsApp(
  phone: string
): string {
  const cleaned =
    phone.replace(/\D/g, "");

  if (cleaned.startsWith("0")) {
    return `+62${cleaned.slice(1)}`;
  }

  if (cleaned.startsWith("62")) {
    return `+${cleaned}`;
  }

  return `+${cleaned}`;
}