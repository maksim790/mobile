package com.example.ar_app

import android.app.ActivityManager
import android.content.Context
import android.net.Uri
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.support.annotation.RequiresApi
import android.widget.Toast
import com.google.ar.core.Anchor
import com.google.ar.sceneform.AnchorNode
import com.google.ar.sceneform.rendering.ModelRenderable
import com.google.ar.sceneform.rendering.Renderable
import com.google.ar.sceneform.ux.ArFragment
import com.google.ar.sceneform.ux.TransformableNode
import java.util.function.Consumer

private const val MIN_OPENGL_VERSION = 3.0
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    private fun isDeviceArSupported(context : Context) : Boolean {
        when {
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.N -> {
                val openGlVersionString = (context.getSystemService(AppCompatActivity.ACTIVITY_SERVICE) as ActivityManager)
                    .deviceConfigurationInfo
                    .glEsVersion
                if (openGlVersionString.toDouble() < MIN_OPENGL_VERSION) {

                    Toast.makeText(this, "Minimum Open GL version should be 3 or later", Toast.LENGTH_LONG)
                        .show()
                    this.finish()
                    return false
                }
                return true
            }
            else -> {
                Toast.makeText(this, "Android version should be 7 or later versions",
                    Toast.LENGTH_LONG
                )
                    .show()
                this.finish()
                return false
            }
        }
    }

    private fun addModelToScene(arFragment: ArFragment, anchor: Anchor, renderable: Renderable) {
        val transformableNode = TransformableNode(arFragment.transformationSystem)
        transformableNode.renderable = renderable

        val anchorNode = AnchorNode(anchor)
        transformableNode.setParent(anchorNode)
        arFragment.arSceneView.scene.addChild(anchorNode)
        transformableNode.select()
    }

    @RequiresApi(Build.VERSION_CODES.N)
    private fun placeObjectOnScene(fragment: ArFragment, anchor: Anchor, uri: Uri) {
        ModelRenderable.builder()
            .setSource(fragment.context, uri)
            .build()
            .thenAccept(Consumer { renderable: ModelRenderable? ->
                addModelToScene(
                    fragment, anchor, renderable!!
                )
            })
            .exceptionally { throwable: Throwable ->
                Toast.makeText(
                    fragment.context, "Error:" + throwable.message,
                    Toast.LENGTH_LONG
                ).show()
                null
            }
    }
}
