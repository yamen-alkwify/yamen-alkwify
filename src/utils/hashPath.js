export const hashPath = (sectionId) => `${import.meta.env.BASE_URL}#${String(sectionId).replace(/^#+/, '')}`;
