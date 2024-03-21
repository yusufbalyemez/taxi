import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const onDragEnd = (result, images, setImages) => {
  if (!result.destination) {
    return;
  }

  const items = Array.from(images);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);

  setImages(items);
};

const CarGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/auth/get-photos`);
        console.log("Gelen veriler: ", response.data); // Verileri konsola yazdırın
        const db_images = response.data;
        setImages(db_images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    fetchImages();
  }, []);

  const deleteImage = async (dbId) => {
    console.log(`Silinmekte olan resmin id'si: ${dbId}`); // Test için eklenmiştir
    try {
      await axios.delete(`${apiUrl}/api/auth/deletephoto/${dbId}`);
      setImages(images.filter(image => image._id !== dbId)); // Burayı düzelttim
    } catch (error) {
      console.error(`Resim silinirken bir hata oluştu: ${dbId}`, error);
    }
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
  <Draggable key={image._id ? image._id.toString() : index.toString()} draggableId={image._id ? image._id.toString() : index.toString()} index={index}>
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
          <img src={image.imgSrc} alt={`Image ${image._id ? image._id : index}`} style={{ width: "200px", height: "200px" }} />
          
          <label>{image.index}</label>
          <button
            onClick={() => deleteImage(image._id,index)} // Burada image._id doğru mu kontrol edin
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

export default CarGallery;
