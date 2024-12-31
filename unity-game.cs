using UnityEngine;
using UnityEngine.SceneManagement;

public class BirdRun : MonoBehaviour
{
    public float speed = 5f;
    private bool gameOver = false;

    void Update()
    {
        if (gameOver)
        {
            if (Input.anyKey)
            {
                SceneManager.LoadScene(SceneManager.GetActiveScene().name);
            }
            return;
        }

        transform.Translate(Vector3.right * speed * Time.deltaTime);

        if (transform.position.x > 10f)
        {
            gameOver = true;
        }
    }

    void OnGUI()
    {
        if (gameOver)
        {
            GUI.Label(new Rect(200, 200, 200, 100), "Game Over! Press any key to restart.");
        }
    }
}
