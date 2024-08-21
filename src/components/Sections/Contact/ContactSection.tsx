'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Tilt from 'react-parallax-tilt';
import { TbMessages } from 'react-icons/tb';
import { FaEnvelope, FaPaperPlane, FaUserTie } from 'react-icons/fa';
import styles from './contactSection.module.scss';
import Section from '../Section';
import Input from '@/components/Input/Input';
import { StatusMessageType } from '@/types/components/Sections/ContactSection/ContactSection';
import imgFormContact from '@/assets/img/form_contact.jpg';

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<StatusMessageType>();
  const t = useTranslations('contact');
  const contactId = useTranslations('navbar');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dataForm: FieldValues) => {
    try {
      setSending(true);

      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataForm),
      });

      if (response.ok) {
        reset();
        setStatusMessage({
          status: 'success',
          message: t('formValidation.messageSent'),
        });
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
      setStatusMessage({
        status: 'danger',
        message: t('formValidation.sendingError'),
      });
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage(undefined);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <Section
      id={contactId('contact')}
      title={t('title')}
      icon={<TbMessages />}
      style={{ backgroundColor: '#e5ecfb' }}
    >
      <div className={styles.contact}>
        <div className="row">
          <div className="col d-none d-md-block">
            <div className="d-flex h-100 align-items-center">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
                <Image
                  src={imgFormContact}
                  alt="Contact"
                  className="img-fluid"
                />
              </Tilt>
            </div>
          </div>
          <div className="col">
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              {statusMessage && (
                <div
                  className={`alert alert-${statusMessage.status}`}
                  role="alert"
                >
                  {statusMessage.message}
                </div>
              )}
              <Input
                name="name"
                placeholder={t('name')}
                errors={errors}
                register={register}
                validationSchema={{
                  required: true,
                }}
              >
                <FaUserTie />
              </Input>
              <Input
                name="email"
                placeholder={t('email')}
                errors={errors}
                register={register}
                validationSchema={{
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t('formValidation.invalidEmail'),
                  },
                }}
              >
                <FaEnvelope />
              </Input>
              <Input
                type="textarea"
                name="message"
                rows={8}
                placeholder={t('message')}
                errors={errors}
                register={register}
                validationSchema={{
                  required: true,
                  minLength: {
                    value: 8,
                    message: t('formValidation.shortMessage'),
                  },
                }}
              />
              <div className="mx-auto">
                <button className={styles.button} disabled={sending}>
                  {t('sendMessage')}{' '}
                  {sending ? (
                    <div className="spinner-border" role="status" />
                  ) : (
                    <FaPaperPlane />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
