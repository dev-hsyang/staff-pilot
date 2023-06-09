import Button from '@/Components/Button';

export default function todayDuty() {
  const currentDate = new Date();
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekday = weekdays[currentDate.getDay()];
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const formattedDate = `${month}/${day} (${weekday})`;

  return (
    <section className="flex flex-col gap-4 w-full bg-white rounded-md p-5 shadow-md">
      <div className="text-left space-y-2">
        <h1>오늘 근무</h1>
        <div className="space-y-1">
          <p>{formattedDate}</p>
          <p className="space-x-2">
            <span>일정 없음</span>
            <span className="bg-gray-500 rounded-lg p-1 px-2 text-white">무일정</span>
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button step="second">요청</Button>
        <Button>
          <p className="text-base whitespace-nowrap">출근하기</p>
        </Button>
      </div>
    </section>
  );
}
