import clsx from "clsx";

export default function InvoiceState({ status }:  {status: string}){
    return (
        <span
            className={clsx(
                'inline-flex items-center rounded-full px-3 py-1 text-sm',
                {
                   'bg-gray-100 texxt-gray-500': status=== 'pending',
                   'bg-green-500 text-white': status === 'paid',
                }
            )}

        ></span>
    )
}