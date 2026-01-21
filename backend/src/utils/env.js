

export const getRequiredVar = (name) => {
  const variable = process.env[name];
  
  if (!variable) {
    throw new Error(`Variable de entorno no encontrada: ${name}`);
  }

  return variable
}
