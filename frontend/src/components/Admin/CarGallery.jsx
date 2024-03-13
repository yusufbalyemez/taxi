import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Bir sürükleme işlemi sona erdiğinde çağrılacak fonksiyon
const onDragEnd = (result, images, setImages) => {
  if (!result.destination) {
    return;
  }

  const items = Array.from(images);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);

  setImages(items);
};

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const db_images = [
        { id: "1", imgSrc: "/images/car/1.png" },
        { id: "2", imgSrc: "/images/car/2.png" },
        { id: "3", imgSrc: "/images/car/3.png" },
        { id: "4", imgSrc: "/images/car/4.png" },
        { id: "5", imgSrc: "/images/car/5.png" },
        { id: "6", imgSrc: "/images/car/6.png" },
        { id: "7", imgSrc: "/images/car/7.png" },
        { id: "8", imgSrc: "/images/car/8.png" },
        { id: "9", imgSrc: "/images/car/9.png" },
        { id: "10", imgSrc: "/images/car/10.png" },
        { id: "11", imgSrc: "/images/car/1.png" },
        { id: "12", imgSrc: "/images/car/2.png" }
      ];
      setImages(db_images);
    };

    fetchImages();
  }, []);

  // Resim silme işlevi
  const deleteImage = async (id) => {
    setImages(images.filter(image => image.id !== id));
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, images, setImages)}>
      <Droppable droppableId="droppableImages" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ display: 'flex', overflowX: 'auto' }}
          >
            {images.map((image, index) => (
              <Draggable key={image.id} draggableId={image.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      marginRight: '10px',
                    }}
                  >
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <img src={image.imgSrc} alt={`Image ${image.id}`} style={{ width: "200px", height: "200px" }} />
                      <button
                        onClick={() => deleteImage(image.id)}
                        style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          background: 'red',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          width: '25px',
                          height: '25px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ImageList;
