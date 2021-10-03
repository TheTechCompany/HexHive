import React, { useEffect } from 'react';
import { Engine, Scene, Vector3, ArcRotateCamera, SceneLoader } from '@babylonjs/core';
import "@babylonjs/loaders/glTF";
import { useRef } from 'react';
import { Box } from 'grommet';
import useResizeAware from 'react-resize-aware';


export interface BabylonViewerProps {
  data: string;
  rootUrl: string;
}

export const BabylonViewer : React.FC<BabylonViewerProps> = (props) => {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const sceneRef = useRef<any>(null);
  const engineRef = useRef<any>(null);

  React.useEffect(() => {
    const onResizeWindow = () => {
      if (engineRef.current) {
        engineRef.current.resize();
      }
    }
    if (props.data) {


      if (!engineRef.current) {
        engineRef.current = new Engine(
          canvasRef.current,
          true
        )
      }

      if (!sceneRef.current) {
        sceneRef.current = new Scene(engineRef.current)
        sceneRef.current.createDefaultEnvironment();
      }

      var camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 10), sceneRef.current);

      camera.setTarget(Vector3.Zero());
      camera.minZ = 0;
      camera.wheelPrecision = 7;
      camera.speed = 0.5;

      console.log(props.data)

      SceneLoader.ImportMesh(null, props.rootUrl, props.data, sceneRef.current, (e) => {
        console.log(e)
        e[0].normalizeToUnitCube(true)
        e[0].position = Vector3.Zero()
      }, null, null, ".glb")

      camera.attachControl(canvasRef.current, false);
      window.addEventListener("resize", onResizeWindow);
      engineRef.current.runRenderLoop(function () {
        sceneRef.current.render();
      });


    }
    return () => {
      if (engineRef.current) {
        engineRef.current.stopRenderLoop()
      }
      if (sceneRef.current) {
        sceneRef.current.dispose()
        sceneRef.current = null
      }

      window.removeEventListener('resize', onResizeWindow)
    }
  }, [props.data])

  const [resizeListener, sizes] = useResizeAware();


  useEffect(() => { 
    if(sizes && engineRef.current){
        engineRef.current?.resize();
    }
  }, [sizes, engineRef.current])

  return (
    <Box 
        style={{position: 'relative'}}
        flex
        direction="row">
            {resizeListener}
        <canvas style={{ width: sizes.width || 0, height: sizes.height || 0}} ref={canvasRef} />
    </Box>
  )
}