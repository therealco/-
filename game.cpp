#include <iostream>

void startGame() {
    std::cout << "Welcome to Bird Run on Mars!" << std::endl;
    std::cout << "Escape from the space alligators to survive." << std::endl;

    // Game loop
    while (true) {
        // Game logic here
        char action;
        std::cout << "Press 'q' to quit or any other key to continue: ";
        std::cin >> action;

        if (action == 'q') {
            break;
        }

        // Check if bird dies
        bool birdDied = rand() % 2; // Randomly determine if bird dies
        if (birdDied) {
            std::cout << "You were caught by the space alligators! Restarting game..." << std::endl;
            continue;
        }

        std::cout << "You survived this round!" << std::endl;
    }
}

int main() {
    startGame();
    return 0;
}
