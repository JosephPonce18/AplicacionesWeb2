// import { envs } from './config/plugins/envs.plugin'
import prisma from './prismaInstance';


const createForo = async () => {
    const foroCreated = await prisma.foro.create({
      data: {
        email: "poncejoseph182000@gmail.com",
        id_comunity: 1,
        description: "Descripción del foro",
        just_now: true
      }
    });
    console.log(foroCreated);
  };
  
  const createPregunta = async (foroId: number, preguntaMessage: string) => {
    const preguntaCreated = await prisma.answer.create({
      data: {
        Foro_id: foroId,
        message: preguntaMessage
      }
    });
    console.log(preguntaCreated);
  };
  
  const createRespuesta = async (foroId: number, respuestaMessage: string) => {
    const respuestaCreated = await prisma.response.create({
      data: {
        Foro_id: foroId,
        message: respuestaMessage
      }
    });
    console.log(respuestaCreated);
  };
  
  const queryForo = async (foroId: number) => {
    const foro = await prisma.foro.findUnique({
      where: {
        id: foroId
      },
      include: {
        answers: true,
        responses: true
      }
    });
    console.log(foro);
  };
  
  const updateForo = async (foroId: number, newDescription: string) => {
    const updatedForo = await prisma.foro.update({
      where: {
        id: foroId
      },
      data: {
        description: newDescription
      }
    });
    console.log(updatedForo);
  };
  
  const deleteForo = async (foroId: number) => {
    const deletedForo = await prisma.foro.delete({
      where: {
        id: foroId
      }
    });
    console.log(deletedForo);
  };
  
  (async () => {
    try {
      await createForo();
      await createPregunta(1, "¿Cuál es la pregunta?");
      await createRespuesta(1, "Esta es una respuesta.");
      await queryForo(1);
      await updateForo(1, "Nueva descripción del foro");
      await deleteForo(1);
    } catch (error) {
      console.error(error);
    } finally {
      await prisma.$disconnect();
    }
  })();