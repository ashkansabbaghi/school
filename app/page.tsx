import Link from "next/link";
import Image from "next/image";

export default function Example() {

  return (
    <div dir="rtl" className="max-w-8xl mx-auto bg-white">
      <section className="w-full text-black p-5">
        <div className="max-w-8xl mx-auto inline-block items-center lg:flex gap-5">
          <div className="lg:w-3/6">
            <h2 className="w-full lg:text-[4.2em] text-2xl font-bold leading-none text-black inline-block">
              به داشبورد مدرسه خوش آمدید
            </h2>

            <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
              یک پلتفرم جامع برای مدیریت همه چیز از داده‌های دانش‌آموزان تا ارتباطات کارکنان و والدین، که اطمینان از عملیات روزانه مدرسه را فراهم می‌کند.
            </p>
          </div>
          <div className="hidden w-full flex-col lg:inline-block lg:w-3/6 items-center justify-center">
            <Image
              src="/images/ai1.webp"
              alt="داشبورد مدرسه"
              width={500}
              height={500}
              className="rounded-lg w-auto h-[calc(100vh-50px)]"
            />
          </div>
          <div className="my-10 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
            <Image
              src="/images/ai1.webp"
              alt="تصویر"
              height={500}
              width={500}
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <div className="mt-0 bg-white lg:mt-12">
          <div className="mx-auto">
            <div className="mx-auto px-5 py-10 lg:px-24">
              <div className="my-5 flex w-full flex-col text-center">
                <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
                  رابط کاربری کارآمد و کاربرپسند برای همه کاربران
                </h2>
                <h3 className="mb-8 text-5xl font-bold text-black">
                  مدیریت کارکنان، دانش‌آموزان و والدین به صورت یکپارچه
                </h3>
                <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
                  پیگیری حضور، تکالیف و ارتباطات در یک مکان. داشبورد جریان اطلاعات بین همه طرف‌ها را به صورت کارآمد تضمین می‌کند.
                </h3>
              </div>
              {/* list of features */}
              <div
                className="grid grid-cols-2 gap-16 text-center lg:grid-cols-6"
              >
                <div className="hidden items-center justify-center lg:inline-block">
                  <Image
                    src="/images/segment.png"
                    alt="بخش"
                    className="block h-24 object-contain"
                    width={100}
                    height={100}
                  />
                </div>

              </div>
            </div>
          </div>
          <div className="text-black">
            <div className="max-w-8xl mx-auto flex flex-col px-5 py-12 text-black lg:flex-row">
              <div className="lg:mb-0 lg:w-full lg:max-w-xl">
                <Image
                  className="rounded object-cover object-center"
                  alt="تصویر"
                  src="/images/ai2.webp"
                  width={500}
                  height={500}
                />
              </div>
              <div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32 lg:pl-48 lg:text-left">
                <h2 className="mb-2 text-lg leading-tight text-gray-700 sm:text-lg">
                  بهینه‌سازی شده برای مدارس با هر اندازه‌ای
                </h2>
                <h2 className="mb-6 text-lg font-bold sm:text-lg">
                  از مدارس کوچک تا مؤسسات بزرگ.
                </h2>
                <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
                  امروز آینده مدیریت مدرسه را تجربه کنید.
                </h2>
                <a
                  href="/"
                  className="underline-blue mt-12 text-lg font-bold leading-relaxed"
                >
                  داشبورد را کاوش کنید
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}