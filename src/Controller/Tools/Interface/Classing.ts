
/**
 * Classing method 
 * 
 * @returns
 */
const classing = (element: HTMLElement, className: string): () => void => {

    // Set class name
    element.classList.add(className);

    // Set callable to remove this class name
    return () => element.classList.remove(className);
}

export default classing