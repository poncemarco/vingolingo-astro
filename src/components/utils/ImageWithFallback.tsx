interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    defaultSrc: string;
}
const ImageWithFallback: React.FC<ImageProps> = ({ src, alt, className, defaultSrc}) => {
    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      // Cambiar la fuente de la imagen al valor por defecto
        event.currentTarget.src = defaultSrc;
    };

    return (
        <img
        src={src}
        alt={alt}
        onError={handleError} // Maneja el error de carga
        style={{ width: '100%', height: 'auto' }} // Estilo opcional
        />
    );
    };

    export default ImageWithFallback;