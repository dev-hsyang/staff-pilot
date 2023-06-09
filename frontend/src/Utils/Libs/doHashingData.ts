import bcryptjs from 'bcryptjs';

export default async function doHashingData(data: string) {
  const hashingData = await bcryptjs
    .hash(data, 10)
    .then((hashedData) => hashedData)
    .catch((err) => {
      console.error('Hashing Error', err);
    });

  return hashingData;
}
