import pygame
import sys
import random

pygame.init()
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()

bird = pygame.Rect(50, 300, 50, 50)
bird_color = (255, 0, 0)
background_color = (0, 0, 0)
font = pygame.font.Font(None, 74)

def main():
    game_over = False
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

        if not game_over:
            bird.x += 5
            if bird.x > 800:
                game_over = True

        screen.fill(background_color)
        pygame.draw.rect(screen, bird_color, bird)
        
        if game_over:
            text = font.render('Game Over! Restarting...', True, (255, 255, 255))
            screen.blit(text, (200, 300))
            pygame.display.flip()
            pygame.time.wait(2000)
            bird.x = 50
            game_over = False
        
        pygame.display.flip()
        clock.tick(30)

main()
