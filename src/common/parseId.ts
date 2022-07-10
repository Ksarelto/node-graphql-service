interface IDataId {
  _id: string;
}

export const idParser = (data: IDataId) => {
  if (Array.isArray(data)) {
    const parsedDataArray = data.map((d) => {
      const newd = { ...d, id: d._id };
      delete newd._id;
      return newd;
    });

    return parsedDataArray;
  }

  const parsedDataObject = { ...data, id: data._id };
  delete parsedDataObject._id;
  return parsedDataObject;
};
