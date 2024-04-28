'use server';
import { getDayData } from '@/services/db/data';
import { Modal } from '@/components/modal';

interface Props {
  params: {
    date: string;
  };
}
const View = async ({ params }: Props) => {
  const dateStr = `${params.date} 00:00:00.000`;
  const data = await getDayData(1, new Date(dateStr));

  return (
    <Modal title={params.date} isOpen={true} onClose="/">
      <p>hola</p>
      <div>{JSON.stringify(data, null, 2)}</div>
    </Modal>
  );
};

export default View;
