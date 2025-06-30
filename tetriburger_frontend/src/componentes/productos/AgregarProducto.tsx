import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import type { FocusEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  background: transparent;
`;

const StyledForm = styled.form`
  background: #fff;
  padding: 40px 36px 32px 36px;
  border-radius: 24px;
  box-shadow: 0 8px 32px #0002;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 28px;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const FieldGroup = styled.div`
  position: relative;
  margin-bottom: 8px;
`;

const FloatingLabel = styled.label<{ active: boolean }>`
  position: absolute;
  left: 18px;
  top: ${({ active }) => (active ? '2px' : '50%')};
  font-size: ${({ active }) => (active ? '0.92rem' : '1.08rem')};
  color: ${({ active }) => (active ? '#e63946' : '#888')};
  background: #fff;
  padding: 0 4px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.2s;
  font-weight: 600;
  z-index: 2;
`;

const StyledInput = styled.input`
  padding: 18px 18px 10px 18px;
  border-radius: 8px;
  border: 2px solid #ccc;
  background: #fff;
  color: #222;
  font-size: 1rem;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border 0.2s, box-shadow 0.2s;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:focus {
    border: 2px solid #e63946;
    box-shadow: 0 0 0 2px #ffe5e9;
  }

  &::placeholder {
    color: transparent;
  }
`;

const StyledButton = styled.button`
  background: #e63946;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 15px 0;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 18px;
  transition: background 0.2s, transform 0.2s;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    background: #b71c1c;
    transform: scale(1.03);
  }
`;

export default function AgregarProducto() {
  const navegador = useNavigate();
  const urlBase = 'http://localhost:8080/producto/agregar';

  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
  });

  const [focus, setFocus] = useState({
    nombre: false,
    descripcion: false,
    precio: false,
  });

  const { nombre, descripcion, precio } = producto;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocus({ ...focus, [e.target.name]: true });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocus({ ...focus, [e.target.name]: false });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nombre || !descripcion || !precio || isNaN(Number(precio))) {
      alert('Completa todos los campos correctamente');
      return;
    }
    await axios.post(urlBase, producto);
    alert('Producto agregado');
    navegador('/producto');
  };

  const formRef = useRef<HTMLFormElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
      });
    }
    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 1,
        duration: 0.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <FormContainer>
      <StyledForm onSubmit={onSubmit} ref={formRef}>
        <FieldGroup>
          <StyledInput
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre del producto"
            onChange={onInputChange}
            value={nombre}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <FloatingLabel htmlFor="nombre" active={focus.nombre || !!nombre}>
            Nombre
          </FloatingLabel>
        </FieldGroup>
        <FieldGroup>
          <StyledInput
            id="descripcion"
            name="descripcion"
            type="text"
            placeholder="Descripción del producto"
            onChange={onInputChange}
            value={descripcion}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <FloatingLabel htmlFor="descripcion" active={focus.descripcion || !!descripcion}>
            Descripción
          </FloatingLabel>
        </FieldGroup>
        <FieldGroup>
          <StyledInput
            id="precio"
            name="precio"
            type="text"
            placeholder="Precio"
            onChange={onInputChange}
            value={precio}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <FloatingLabel htmlFor="precio" active={focus.precio || !!precio}>
            Precio
          </FloatingLabel>
        </FieldGroup>
        <StyledButton type="submit" ref={buttonRef}>
          Enviar
        </StyledButton>
      </StyledForm>
    </FormContainer>
  );
}