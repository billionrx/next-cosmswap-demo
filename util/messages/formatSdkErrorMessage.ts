export function formatSdkErrorMessage(e: any) {
  return String(e).length > 300
    ? `${String(e).substring(0, 150)} ... ${String(e).substring(
        String(e).length - 150
      )}`
    : String(e)
}
