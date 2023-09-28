import Image from "next/image";

export function Foto(props) {
    return (
        <div>
            <Image src={`${props.url_image}`}
                width='150'
                height='150'
                alt='imagen-youtube'
            />
        </div>
    )
}