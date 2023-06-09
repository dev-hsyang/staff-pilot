import Button from '@/Components/Button';

export default function AuthMenu() {
  return (
    <>
      <section className="flex flex-col gap-4 w-full bg-white rounded-md p-5 shadow-md">
        <div className="text-left space-y-2">
          <h1>관리자 메뉴</h1>
        </div>
        <div className="flex gap-2">
          <div className="space-y-2 w-1/2">
            <Button step="second">출퇴근장소</Button>
            <Button step="second">직무</Button>
          </div>
          <div className="space-y-2 w-1/2">
            <Button step="second">조직</Button>
            <Button step="second">직원</Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 w-full bg-white rounded-md p-5 shadow-md">
        <div className="text-left space-y-2">
          <h1>근무일정 관리</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="space-y-2">
            <Button step="second">근무일정 생성</Button>
            <Button step="second">근무일정 유형</Button>
          </div>
          <div className="space-y-2">
            <Button step="second">템플릿</Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 w-full bg-white rounded-md p-5 shadow-md">
        <div className="text-left space-y-2">
          <h1>휴가 관리</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="space-y-2">
            <Button step="second">직원휴가 관리</Button>
          </div>
          <div className="flex gap-2">
            <div className="space-y-2 w-1/2 whitespace-nowrap text-center">
              <Button step="second">그룹 생성</Button>
            </div>
            <div className="space-y-2 w-1/2 whitespace-nowrap text-center">
              <Button step="second">유형 생성</Button>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[3rem]" />
    </>
  );
}
